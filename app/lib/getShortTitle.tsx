export const getShortTitle = (title: string) => {
  if (title.length > 20) {
    return `${title.slice(0, 20)}...`;
  }

  return title;
};
