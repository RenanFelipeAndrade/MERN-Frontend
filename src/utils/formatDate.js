export const formatDate = (date) => {
  const dateObject = new Date(date);
  return `${dateObject.toLocaleDateString()}`;
};
