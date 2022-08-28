export const addParagraph = (text) => {
  const paragraphs = text.split("\n");
  const formatedText = paragraphs.map((paragraphs, index) => (
    <p key={index} style={{ whiteSpace: "pre-line" }}>
      {paragraphs}
    </p>
  ));
  return formatedText;
};
