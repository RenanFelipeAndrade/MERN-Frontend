export const formatAuthorName = (name, currentUser) => {
  if (name === currentUser.name) return "You";

  const names = name.split(" ");
  if (names.length <= 2) return name;

  // if it has a preposition
  if (names[names.length - 2].length < 3) {
    return `${names[0]} ${names[names.length - 2]} ${names[names.length - 1]}`;
  }
  return `${names[0]} ${names[names.length - 1]}`;
};
