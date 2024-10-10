'use client';

import React from 'react';

export default function NewsList({ articles }) {
  const handleClick = (id) => {
    console.log(`Article ${id} clicked`);
    // 여기에 백엔드 서버로 API 호출하는 로직을 추가
  };

  return (
    <div style={styles.newsGrid}>
      {articles.map((article) => (
        <div
          key={article.id}
          style={styles.newsBox}
          onClick={() => handleClick(article.id)} // 클릭 이벤트 핸들러
        >
          <h2 style={styles.newsTitle}>{article.title}</h2>
          <p style={styles.newsDate}><strong>Date/Time:</strong> {new Date(article.date).toLocaleString()}</p>
          <p style={styles.newsContent}>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  newsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  newsBox: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  newsTitle: {
    fontSize: '1.5rem',
    color: '#0070f3',
    marginBottom: '10px',
  },
  newsDate: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '15px',
  },
  newsContent: {
    fontSize: '1rem',
    color: '#333',
  },
};
