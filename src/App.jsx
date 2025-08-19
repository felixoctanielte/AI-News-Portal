import { useEffect, useState } from "react";
import NewsItem from "./Components/NewsItem";
import "./index.css";

const HighlightText = ({ text, highlight }) => {
  if (!highlight.trim()) return text;

  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <mark key={i} className="bg-yellow-200 font-bold">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

function App() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("http://localhost:5000/api/news");
        if (!res.ok) throw new Error("Failed to fetch news");

        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    const term = search.trim();
    if (term && !history.includes(term)) {
      setHistory([term, ...history]);
    }
  };

  const handleDeleteHistory = (item) => {
    setHistory(history.filter((h) => h !== item));
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const filtered = search
    ? articles.filter((a) =>
        a.title.toLowerCase().includes(search.toLowerCase())
      )
    : articles;

  return (
    <div className="container">
      <h1>AI News Portal</h1>

      <div className="search-container">
        <div className="search-box-wrapper">
          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={handleSearchChange}
            className="search-box"
            onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
          />
          <button className="search-btn" onClick={handleSearchSubmit}>
            🔍
          </button>
        </div>

        {history.length > 0 && (
          <div className="search-history">
            <div className="history-header">
              <p>Recent searches:</p>
              <button className="clear-btn" onClick={handleClearHistory}>
                Clear All
              </button>
            </div>
            <ul>
              {history.map((h, i) => (
                <li key={i}>
                  <span onClick={() => setSearch(h)}>{h}</span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteHistory(h)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {loading && <div className="loader">Loading news...</div>}
      {error && <div className="error">⚠️ {error}</div>}

      {!loading && !error && (
        <div className="news-list">
          {filtered.length > 0 ? (
            filtered.map((a) => (
              <NewsItem
                key={a.url}
                title={<HighlightText text={a.title} highlight={search} />}
                url={a.url}
                source={a.source}
                publishedAt={a.publishedAt}
              />
            ))
          ) : (
            <p>No news found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
