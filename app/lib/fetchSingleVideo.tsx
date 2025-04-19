export const getSingleVideo = (video_id: string, setCurrentVideo: any) => {
  fetch(
    `https://take-home-assessment-423502.uc.r.appspot.com/videos/single?video_id=${video_id}`
  )
    .then((response) => response.json())
    .then((data) => setCurrentVideo(data.video));
};
