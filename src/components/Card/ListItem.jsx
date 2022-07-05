import trashIcon from "../../svg/delete-white.svg";
import editIcon from "../../svg/white-pencil-edit.svg";

export const ListItem = ({
  children,
  style,
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
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
          ...style,
        }}
      >
        {/* if not editing  */}
        <h2 className="title is-4 mb-4">{title || article.title}</h2>
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
  );
};
