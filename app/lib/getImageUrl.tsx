export const getImageUrl = (videoUrl: string) => {
  const domainRemoved = videoUrl.split("=")[1];
  const videoId = domainRemoved.split("&")[0];
  const imageUrl = `http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return imageUrl;
};
