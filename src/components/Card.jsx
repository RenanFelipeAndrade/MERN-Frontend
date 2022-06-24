import trashIcon from "../svg/delete-white.svg";

export default function Card({ title, children, style, article, ...props }) {
  const deleteArticle = async (articleId) => {
    const rawResponse = await fetch(
      `http://localhost:3000/articles/${articleId}`,
      {
        method: "DELETE",
      }
    ).then((response) => response.json().then((data) => setArticles(data)));
    const response = await rawResponse.text();
    console.log(response);
  };

  return (
    <div className="card p-4">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
          ...style,
        }}
      >
        <h2 className="title is-4">{title}</h2>
        {props.deleteIcon && (
          <button
            className="button is-danger"
            onClick={() => {
              deleteArticle(article._id);
            }}
          >
            <img src={trashIcon} alt="delete icon" width={"25px"} />
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
