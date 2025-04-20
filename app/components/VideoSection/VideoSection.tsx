"use client";
import { useEffect } from "react";
import {
  VideoSectionWrap,
  VideoSectionList,
  VideoListItem,
} from "./VideoSectionStyles";
import { useVideoList, getImageUrl, getShortTitle } from "@/app/lib";
import Link from "next/link";
import { ImageWithFallback } from "@/app/components";

//This component fetches and contains a list of videos to be displayed on the
//homepage
const VideoSection = () => {
  const { getVideoList, videoList } = useVideoList();

  useEffect(() => {
    if (videoList.length < 1) {
      getVideoList(); //Fetches the list of videos on initial page load
    }
  }, []);

  return (
    <VideoSectionWrap>
      <VideoSectionList>
        {videoList &&
          videoList.map((video, idx) => {
            const { id, title, video_url } = video;
            const imageUrl = getImageUrl(video_url);
            const altText = getShortTitle(title);
            const preload = idx === 0;
            return (
              <VideoListItem key={`${idx}-${id}`}>
                <Link href={`/videos/${id}`}>
                  <ImageWithFallback
                    imageUrl={imageUrl}
                    altText={altText}
                    preload={preload}
                    title={title}
                  />
                </Link>
              </VideoListItem>
            );
          })}
      </VideoSectionList>
    </VideoSectionWrap>
  );
};

export default VideoSection;
