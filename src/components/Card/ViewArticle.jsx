import { useAuth } from "../../context/AuthContext";
import { formatAuthorName } from "../../utils/formatAuthorName";
import { formatDate } from "../../utils/formatDate";

export const ViewArticle = ({ article, setReading, ...props }) => {
  const { userData } = useAuth();
  const addParagraphs = (text) => {
    const paragraphs = text.split("\n");
    const formatedText = paragraphs.map((paragraphs, index) => (
      <p key={index} style={{ whiteSpace: "pre-line" }}>
        {paragraphs}
      </p>
    ));
    return formatedText;
  };
  return (
    <>
      <div className="container">
        <h2 className="title is-3 p-4">{article.title}</h2>
        <div>
          <div className="level">
            <span className="level-left px-4">
              {formatDate(article.createdAt)}
            </span>
            <span className="level-right px-4">
              {formatAuthorName(article.author.name, userData)}
            </span>
          </div>
        </div>
        <section
          className="content px-4 mt-5 has-text-justified"
          style={{ whiteSpace: "pre-line" }}
        >
          {addParagraphs(article.text)}
        </section>
      </div>
    </>
  );
};
