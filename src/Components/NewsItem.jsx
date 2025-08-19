import React from "react";

const NewsItem = ({ title, url, source, publishedAt }) => {
  return (
    <div className="news-item">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="news-title"
      >
        {title}
      </a>
      <div className="news-meta">
        <span className="news-source">{source}</span>
        <span className="news-date">
          {publishedAt
            ? new Date(publishedAt).toLocaleString()
            : "Unknown date"}
        </span>
      </div>
    </div>
  );
};

export default NewsItem;
