# AI News Portal

A responsive React application built with Vite that fetches the latest news about **Artificial Intelligence** from multiple public news APIs. It includes a search feature with search history, highlighting search terms in the results, and automatic deduplication of news articles.

---

## Features

- Fetches news from **NewsAPI**, **GNews**, and **CurrentsAPI**.
- Displays news headlines with links, source, and published date.
- Search functionality with:
  - Highlighted search keywords in titles.
  - Search history management (click to reuse, delete, or clear all).
- Responsive design for desktop and mobile.
- Handles API errors gracefully.
- Deduplicates articles and sorts by latest published date.

---

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS  
- **Backend**: Node.js + Express + CORS  
- **APIs Used**:
  - [NewsAPI](https://newsapi.org/)
  - [GNews](https://gnews.io/)
  - [CurrentsAPI](https://currentsapi.services/)

---

## Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd ai-news-portal
```
2. Install dependencies for backend
 ```bash
cd server
npm install

```

4. Install dependencies for frontend
```bash
cd server
npm install
```

💻 Usage
Start Backend
```bash
cd server
node index.js
```
Start Frontend
```bash
npm run dev
```

📁 Project Structure
```bash
ai-news-portal/
├─ server/
│  └─ index.js        # Express backend
├─ src/
│  ├─ App.jsx         # Main React component
│  ├─ Components/
│  │  └─ NewsItem.jsx # Individual news item
│  └─ index.css       # Styles
└─ package.json       # Frontend dependencies
```

Usage Notes

- Press Enter or click the search button to search news.
- Click a history item to re-search or use the delete button to remove it.
- Click “Clear All” to reset the search history.
- Latest news is always displayed first, with duplicate articles removed automatically.



