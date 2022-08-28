import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Card/Card";
import { Navbar } from "./Navbar/Navbar";
import { Modal } from "./Modal";
import { ArticleForm } from "./ArticleForm";
import { Notification } from "./Notification";
import { ViewArticle } from "./Card/ViewArticle";
import { useAuth } from "../context/AuthContext";

export const Articles = () => {
  const url = import.meta.env.VITE_API_URL;

  const { accessToken } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});
  const [response, setResponse] = useState({});
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);
  const [reading, setReading] = useState(false);

  // fetch all data when response changes
  useEffect(() => {
    async function fetchArticles() {
      await fetch(`${url}/articles`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((response) => response.json().then((data) => setArticles(data)));
    }
    fetchArticles();
    return;
  }, [response]);

  // show notification when response changes
  useEffect(() => {
    if (response.error === false || response.error === true) setShow(true);
    setIsVisible(false);
    setTimeout(() => setShow(false), 3000);
  }, [response]);

  return (
    <>
      <Navbar />
      {reading ? (
        <ViewArticle article={article} setReading={setReading} />
      ) : (
        <div className="container">
          <h2 className="title is-2 mt-4 px-4">Articles</h2>
          <section className="columns my-2 mx-0">
            {editing ? (
              // if editing
              <Card
                article={article}
                setEditing={setEditing}
                setResponse={setResponse}
                editing
              />
            ) : (
              articles.map((article, index) => (
                // if listing all articles
                <Card
                  key={index}
                  className="column is-relative m-0"
                  article={article}
                  setArticle={setArticle}
                  setResponse={setResponse}
                  setEditing={setEditing}
                  setReading={setReading}
                  reading
                  deleteIcon
                  editIcon
                >
                  <p
                    className="card-content has-text-justified is-clipped"
                    style={{
                      maxHeight: "10rem",
                    }}
                  >
                    {article.text}
                  </p>
                </Card>
              ))
            )}
          </section>
        </div>
      )}
      {reading ? (
        <button
          onClick={() => setReading(false)}
          style={{ position: "fixed", right: 20, bottom: 20 }}
          className={"button is-primary"}
        >
          Return
        </button>
      ) : (
        !editing && (
          <button
            onClick={() => setIsVisible(true)}
            style={{ position: "fixed", right: 20, bottom: 20 }}
            className={"button is-link"}
          >
            Create
          </button>
        )
      )}

      {show && response.error ? (
        <Notification show={show} variant={"is-danger"}>
          An error has occured: {response.message}
        </Notification>
      ) : (
        <Notification show={show} variant={"is-success"}>
          {response.message}
        </Notification>
      )}

      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <ArticleForm setResponse={setResponse} setIsVisible={setIsVisible} />
      </Modal>
    </>
  );
};
