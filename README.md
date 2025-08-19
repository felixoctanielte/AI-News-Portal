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
   <img width="942" height="84" alt="image" src="https://github.com/user-attachments/assets/93c511f3-996d-4874-8411-34cd304e8168" />

4. Install dependencies for frontend
<img width="772" height="101" alt="image" src="https://github.com/user-attachments/assets/efe197cf-a732-47a9-a043-2dc6bb49421f" />

Usage
Start Backend
<img width="815" height="104" alt="image" src="https://github.com/user-attachments/assets/6858948f-7e96-416c-b09e-9c1d28a93a8b" />

Start Frontend
<img width="820" height="91" alt="image" src="https://github.com/user-attachments/assets/d577b61c-4a37-43d7-90a0-7c4604cd4ff2" />


Project Structure

<img width="488" height="304" alt="image" src="https://github.com/user-attachments/assets/641bfa97-a864-40a5-877f-c2d9debfbd9c" />

Usage Notes

- Press Enter or click the search button to search news.
- Click a history item to re-search or use the delete button to remove it.
- Click “Clear All” to reset the search history.
- Latest news is always displayed first, with duplicate articles removed automatically.



