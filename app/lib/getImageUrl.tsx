//Creates an image url by pulling the video id from the video url
export const getImageUrl = (videoUrl: string) => {
  const domainRemoved = videoUrl.split("=")[1];
  const videoId = domainRemoved.split("&")[0];
  const imageUrl = `http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return imageUrl;
};
