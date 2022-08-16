export const formatAuthorName = (name) => {
  const nameParts = name.split(" ");
  if (nameParts.length <= 2) return name;

  if (nameParts[nameParts.length - 2].length < 3) {
    return `${nameParts[0]} ${nameParts[nameParts.length - 2]} ${
      nameParts[nameParts.length - 1]
    }`;
  }
  return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
};
