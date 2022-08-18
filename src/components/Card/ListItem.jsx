import { useAuth } from "../../context/AuthContext";
import trashIcon from "../../svg/delete-white.svg";
import editIcon from "../../svg/white-pencil-edit.svg";
import { formatAuthorName } from "../../utils/formatAuthorName";
import { formatDate } from "../../utils/formatDate";

export const ListItem = ({
  children,
  title,
  article,
  setArticle,
  setEditing,
  setResponse,
  ...props
}) => {
  const url = import.meta.env.VITE_API_URL;
  const { userData } = useAuth();

  const editArticle = (article) => {
    setArticle(article);
    setEditing(true);
  };

  const deleteArticle = async (articleId) => {
    await fetch(`${url}/articles/${articleId}`, {
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
  return (
    <>
      <div
        className={`is-flex is-flex-direction-row is-justify-content-space-between ${props.className}`}
      >
        <div className="mb-4">
          {article ? (
            <>
              <h2 className="title is-3">{article.title}</h2>
              <div className="is-flex is-flex-direction-column is-justify-content-space-between">
                <span className="mb-2 content">
                  Created at: {formatDate(article.createdAt)}
                </span>
                <h3 className="subtitle is-6">
                  Author: {formatAuthorName(article.author.name, userData)}
                </h3>
              </div>
            </>
          ) : (
            <h2 className="title is-3">{title}</h2>
          )}
        </div>

        {/* edit or delete icons, if those exist and the user is the author */}
        {article?.author.googleId === userData.googleId &&
        (props.editIcon || props.deleteIcon) ? (
          <span className="buttons are-small is-justify-content-flex-end">
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
                className="button is-primary mr-2"
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
        ) : null}
      </div>
      {children}
    </>
  );
};
