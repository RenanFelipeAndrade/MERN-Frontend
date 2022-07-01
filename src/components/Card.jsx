import { useState } from "react";
import trashIcon from "../svg/delete-white.svg";
import editIcon from "../svg/white-pencil-edit.svg";

export default function Card({
  title,
  children,
  style,
  article,
  setArticle,
  setEditing,
  setResponse,
  ...props
}) {
  const [formState, setFormState] = useState(article);

  const editArticle = (article) => {
    setArticle(article);
    setEditing(true);
  };

  const deleteArticle = async (articleId) => {
    await fetch(`http://localhost:3000/articles/${articleId}`, {
      method: "DELETE",
    })
      .then(async (response) =>
        setResponse({
          message: await response.text(),
          error: false,
          status: response.status,
        })
      )
      .catch((error) =>
        setResponse({
          message: error.message,
          error: true,
          status: error,
        })
      );
  };

  const updateArticle = async () => {
    await fetch(`http://192.168.0.101:3000/articles/${article._id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(formState),
    })
      .then(async (response) => {
        setResponse({
          message: await response.text(),
          error: false,
          status: response.status,
        });
        setEditing(false);
      })
      .catch((error) => {
        setResponse({
          message: error.message,
          error: true,
          status: error,
        });
        setEditing(false);
      });
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <div className="card p-4">
      {props.editing ? (
        <>
          <div className="mb-4" style={{ ...style }}>
            {/* if editing  */}
            <input
              className="title is-4 input"
              name="title"
              defaultValue={article.title}
              onChange={handleChange}
            />
          </div>
          <section className="control">
            <textarea
              className="textarea"
              name="text"
              placeholder="Digite o artigo"
              defaultValue={article.text}
              onChange={(event) => handleChange(event)}
            />
          </section>
          <span className="buttons">
            <button
              onClick={updateArticle}
              className="button is-primary is-fullwidth mt-2"
            >
              Update
            </button>
            <button
              className="button is-light is-fullwidth"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </span>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "space-between",
              ...style,
            }}
          >
            {/* if not editing  */}
            <h2 className="title is-4 mb-4">{title}</h2>
            <span className="buttons are-small" style={{ flexWrap: "nowrap" }}>
              {props.deleteIcon && (
                <button
                  className="button is-danger"
                  onClick={() => {
                    deleteArticle(article._id);
                  }}
                >
                  <img
                    src={trashIcon}
                    alt="delete icon"
                    width={"20px"}
                    style={{ minWidth: "20px" }}
                  />
                </button>
              )}
              {props.editIcon && (
                <button
                  className="button is-primary"
                  onClick={() => {
                    editArticle(article);
                  }}
                >
                  <img
                    src={editIcon}
                    alt="edit icon"
                    width={"20px"}
                    style={{ minWidth: "20px" }}
                  />
                </button>
              )}
            </span>
          </div>
          {children}
        </>
      )}
    </div>
  );
}
