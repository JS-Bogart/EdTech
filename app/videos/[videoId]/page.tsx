"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { VideoPage } from "./VideoPageStyles";
import { VideoPlayer, CommentsSection } from "@/app/components";
import { getSingleVideo, getComments } from "@/app/lib";

type CurrentVideo = {
  description: string;
  id: string;
  num_comments: number;
  title: string;
  video_url: string;
};

//This page displays the video player and comments for a particular video.
export default function Page() {
  const [currentVideo, setCurrentVideo] = useState<CurrentVideo | null>(null);
  const [comments, setComments] = useState([]);
  const pathname = usePathname();
  const videoId = pathname.split("/").pop(); //Pulls video_id slug from pathname to be used for fetching video and comments

  useEffect(() => {
    if (videoId) {
      getSingleVideo(videoId, setCurrentVideo); //Fetches video
      getComments(videoId, setComments); //Fetches list of comments
    }
  }, []);

  return (
    <VideoPage>
      {currentVideo && <VideoPlayer videoData={currentVideo} />}
      {comments && videoId && (
        <CommentsSection
          comments={comments}
          videoId={videoId}
          setComments={setComments}
        />
      )}
    </VideoPage>
  );
}
