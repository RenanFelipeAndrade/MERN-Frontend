import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

export default function Articles() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      await fetch("http://localhost:3000/articles").then((response) =>
        response.json().then((data) => setArticles(data))
      );
    }
    fetchArticles();
    return;
  }, []);
  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="title mt-4">Articles</h2>
        {articles.map((article, index) => (
          <Card title={article.title} key={index}>
            <p>{article.text}</p>{" "}
          </Card>
        ))}
      </div>
    </>
  );
}
