"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { VideoPage } from "./VideoPageStyles";
import { VideoPlayer } from "@/app/components";
import { getSingleVideo } from "../../lib/fetchSingleVideo";

type CurrentVideo = {
  description: string;
  id: string;
  num_comments: number;
  title: string;
  video_url: string;
};

export default function Page() {
  const [currentVideo, setCurrentVideo] = useState<CurrentVideo | null>(null);
  const pathname = usePathname();
  const videoId = pathname.split("/").pop();

  useEffect(() => {
    if (videoId) {
      getSingleVideo(videoId, setCurrentVideo);
    }
  }, []);

  return (
    <VideoPage>
      {currentVideo && <VideoPlayer videoData={currentVideo} />}
    </VideoPage>
  );
}
