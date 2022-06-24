import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Modal from "./Modal";
import ArticleForm from "./ArticleForm";
import Notification from "./Notification";

export default function Articles() {
  const [isVisible, setIsVisible] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [response, setResponse] = useState({});
  const [show, setShow] = useState(false);

  // fetch all data when response changes
  useEffect(() => {
    async function fetchArticles() {
      await fetch("http://localhost:3000/articles").then((response) =>
        response.json().then((data) => setArticles(data))
      );
    }
    fetchArticles();
    return;
  }, [response]);

  // show notification when response changes
  useEffect(() => {
    if (response.error || response.error === false) setShow(true);
    setIsVisible(false);
    setTimeout(() => setShow(false), 3000);
  }, [response]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="title mt-4 px-4">Articles</h2>
        {articles.map((article, index) => (
          <Card
            title={article.title}
            key={index}
            article={article}
            setResponse={setResponse}
            deleteIcon
          >
            <p className="card-content">{article.text}</p>
          </Card>
        ))}
      </div>

      <button
        onClick={() => setIsVisible(true)}
        style={{ position: "fixed", right: 20, bottom: 20 }}
        className={"button is-primary"}
      >
        Create
      </button>

      {response.error ? (
        <Notification show={show} variant={"is-danger"}>
          An error has occured
        </Notification>
      ) : (
        <Notification show={show} variant={"is-success"}>
          {response.message}
        </Notification>
      )}

      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <ArticleForm setResponse={setResponse} />
      </Modal>
    </>
  );
}
