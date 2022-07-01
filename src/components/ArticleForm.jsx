import { useState } from "react";

export default function ArticleForm({ setResponse, setIsVisible }) {
  const [formState, setFormState] = useState({
    title: "",
    text: "",
  });

  const handleChange = (event) => {
    // destructure the formState object and add a new key value pair
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const rawResponse = await fetch("http://localhost:3000/articles", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formState),
    }).catch((error) =>
      setResponse({
        status: rawResponse.status,
        message: error,
        error: true,
      })
    );

    const response = await rawResponse.text();
    setResponse({
      status: rawResponse.status,
      message: response,
      error: false,
    });
  };

  return (
    <form className="box" onSubmit={(event) => event.preventDefault()}>
      <section className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            name="title"
            onChange={handleChange}
            placeholder="Digite o artigo"
          />
        </div>
      </section>
      <section className="field">
        <label className="label">Content</label>
        <div className="control">
          <textarea
            className="textarea"
            name="text"
            onChange={handleChange}
            placeholder="Digite o artigo"
          />
        </div>
      </section>
      <section className="field is-grouped">
        <div onClick={handleSubmit} className="control">
          <button className="button is-primary">Create</button>
        </div>
        <div className="control">
          <button
            onClick={() => setIsVisible(false)}
            className="button is-secondary"
          >
            Cancel
          </button>
        </div>
      </section>
    </form>
  );
}
