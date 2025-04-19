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

export default function Page() {
  const [currentVideo, setCurrentVideo] = useState<CurrentVideo | null>(null);
  const [comments, setComments] = useState([]);
  const pathname = usePathname();
  const videoId = pathname.split("/").pop();

  useEffect(() => {
    if (videoId) {
      getSingleVideo(videoId, setCurrentVideo);
      getComments(videoId, setComments);
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
