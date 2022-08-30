import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export const EditArticle = ({ article, setEditing, setResponse, style }) => {
  const url = import.meta.env.VITE_API_URL;

  const [formState, setFormState] = useState(article);
  const { accessToken } = useAuth();

  const updateArticle = async () => {
    await fetch(`${url}articles/${article._id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
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
    setTimeout(() => {
      setResponse({});
    }, 3000);
  };

  const handleChange = (event) => {
    // destructure the formState object and add a new key value pair
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  return (
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
  );
};
