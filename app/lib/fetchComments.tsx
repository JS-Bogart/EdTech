//Fetches user comments for a particular video
export const getComments = (video_id: string, setComments: any) => {
  fetch(
    `https://take-home-assessment-423502.uc.r.appspot.com/videos/comments?video_id=${video_id}`
  )
    .then((response) => response.json())
    .then((data) => setComments(data.comments));
};
