//Formats a user entered name into a user_id
export const formatName = (firstname: string, lastname: string): string => {
  return `${firstname.toLowerCase()}_${lastname.toLowerCase()}`;
};
