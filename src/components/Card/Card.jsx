import { EditArticle } from "./EditArticle";
import { ListItem } from "./ListItem";

export const Card = ({
  title,
  children,
  style,
  article,
  setArticle,
  setEditing,
  setResponse,
  setReading,
  ...props
}) => {
  return (
    <div className={`card p-4 ${props.className} mx-auto`} style={style}>
      {props.editing ? (
        <EditArticle
          article={article}
          setResponse={setResponse}
          setEditing={setEditing}
        />
      ) : (
        <ListItem
          article={article}
          title={title}
          setResponse={setResponse}
          setEditing={setEditing}
          setArticle={setArticle}
          setReading={setReading}
          {...props}
        >
          {children}
        </ListItem>
      )}
    </div>
  );
};
