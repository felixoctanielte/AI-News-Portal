import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/news", async (req, res) => {
  try {
    const newsApiKey = "6dad158cedaf4457a64c18e50f04464d";
    const gnewsKey = "155668f6ffee0b198f75c0a882558dff";
    const currentsKey = "ZLiaLTnepVii6_HQYRn08B6QN0gK6_caLLmG71Vlo1AVqJ-k";

    //NewsAPI (5 halaman × 100 artikel)
    const newsApiPages = [1, 2, 3, 4, 5];
    const newsApiRequests = newsApiPages.map((p) =>
      fetch(
        `https://newsapi.org/v2/everything?q=artificial%20intelligence&language=en&pageSize=100&page=${p}&apiKey=${newsApiKey}`
      )
    );
    const newsApiResponses = await Promise.all(newsApiRequests);
    const newsApiData = await Promise.all(
      newsApiResponses.map((r) => (r.ok ? r.json() : { articles: [] }))
    );
    const newsApiArticles = newsApiData.flatMap((d) =>
      (d.articles || []).map((a) => ({
        title: a.title,
        url: a.url,
        source: a.source?.name || "NewsAPI",
        publishedAt: a.publishedAt,
      }))
    );

    // GNews (10 halaman × 100 artikel)
    const gnewsPages = Array.from({ length: 10 }, (_, i) => i + 1);
    const gnewsRequests = gnewsPages.map((p) =>
      fetch(
        `https://gnews.io/api/v4/search?q=artificial%20intelligence&lang=en&max=100&page=${p}&token=${gnewsKey}`
      )
    );
    const gnewsResponses = await Promise.all(gnewsRequests);
    const gnewsData = await Promise.all(
      gnewsResponses.map((r) => (r.ok ? r.json() : { articles: [] }))
    );
    const gnewsArticles = gnewsData.flatMap((d) =>
      (d.articles || []).map((a) => ({
        title: a.title,
        url: a.url,
        source: a.source?.name || "GNews",
        publishedAt: a.publishedAt,
      }))
    );

    // CurrentsAPI
    const currentsRes = await fetch(
      `https://api.currentsapi.services/v1/search?keywords=artificial%20intelligence&apiKey=${currentsKey}`
    );
    const currentsData = currentsRes.ok
      ? await currentsRes.json()
      : { news: [] };
    const currentsArticles = (currentsData.news || []).map((a) => ({
      title: a.title,
      url: a.url,
      source: a.author || "CurrentsAPI",
      publishedAt: a.published,
    }));

    // Gabung semua
    const merged = [...newsApiArticles, ...gnewsArticles, ...currentsArticles];

    // Hapus duplikat
    const unique = Array.from(new Map(merged.map((a) => [a.url, a])).values());

    // Urutkan terbaru
    unique.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    res.json({ total: unique.length, articles: unique });
  } catch (err) {
    console.error("ERROR FETCH:", err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
