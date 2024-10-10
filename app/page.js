import NewsList from "./NewsList";

async function getArticles() {
  const articles = [
    { id: 1, title: 'News Title 1', date: '2024-10-10T12:00:00Z', content: 'This is the content of news article 1.' },
    { id: 2, title: 'News Title 2', date: '2024-10-10T11:00:00Z', content: 'This is the content of news article 2.' },
    { id: 3, title: 'News Title 3', date: '2024-10-10T10:00:00Z', content: 'This is the content of news article 3.' },
    { id: 4, title: 'News Title 4', date: '2024-10-10T09:00:00Z', content: 'This is the content of news article 4.' },
    { id: 5, title: 'News Title 5', date: '2024-10-10T08:00:00Z', content: 'This is the content of news article 5.' },
    { id: 6, title: 'News Title 6', date: '2024-10-10T07:00:00Z', content: 'This is the content of news article 6.' },
    { id: 7, title: 'News Title 7', date: '2024-10-10T06:00:00Z', content: 'This is the content of news article 7.' },
    { id: 8, title: 'News Title 8', date: '2024-10-10T05:00:00Z', content: 'This is the content of news article 8.' },
    { id: 9, title: 'News Title 9', date: '2024-10-10T04:00:00Z', content: 'This is the content of news article 9.' },
    { id: 10, title: 'News Title 10', date: '2024-10-10T03:00:00Z', content: 'This is the content of news article 10.' },
  ];

  return articles;
}

export default async function HomePage() {
  const articles = await getArticles(); // 서버에서 데이터 가져오기

  return (
    <div>
      <h1>Latest News</h1>
      <NewsList articles={articles} /> {/* 클라이언트 컴포넌트로 데이터 전달 */}
    </div>
  );
}