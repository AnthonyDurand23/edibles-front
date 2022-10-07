export const useDate = (date) => {
  const parsingOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const parsedDate = new Date(date).toLocaleString('fr-FR', parsingOptions);
  return parsedDate;
};
