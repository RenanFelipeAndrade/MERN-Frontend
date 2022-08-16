import trashIcon from "../../svg/delete-white.svg";
import editIcon from "../../svg/white-pencil-edit.svg";
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
        className={`is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center ${props.className}`}
      >
        <div className="mb-4">
          <h2 className="title is-3">{title || article.title}</h2>
          <div className="is-flex is-flex-direction-column is-justify-content-space-between">
            <span className="mb-2">
              Created at: {formatDate(article.createdAt)}
            </span>
            <h3 className="subtitle is-6">Author: {article.author}</h3>
          </div>
        </div>

        {/* edit and delete icons, if those exist */}
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
      </div>
      {children}
    </>
  );
};
