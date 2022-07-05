import { EditArticle } from "./EditArticle";
import { ListItem } from "./ListItem";

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
  return (
    <div className="card p-4">
      {props.editing ? (
        <EditArticle
          article={article}
          setResponse={setResponse}
          setEditing={setEditing}
        />
      ) : (
        <ListItem
          article={article}
          setResponse={setResponse}
          setEditing={setEditing}
          setArticle={setArticle}
          {...props}
        >
          {children}
        </ListItem>
      )}
    </div>
  );
}
