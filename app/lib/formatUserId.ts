export const formatUserId = (userId: string): string => {
  return userId
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
