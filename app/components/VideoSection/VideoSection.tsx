"use client";
import { useEffect } from "react";
import {
  VideoSectionWrap,
  VideoSectionList,
  VideoWrap,
  ImageWrap,
  TextWrap,
  VideoText,
} from "./VideoSectionStyles";
import { useVideoList } from "../../lib/VideoListContext";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/app/lib/getImageUrl";
import { getShortTitle } from "@/app/lib/getShortTitle";

const VideoSection = () => {
  const { getVideoList, videoList } = useVideoList();

  useEffect(() => {
    if (videoList.length < 1) {
      getVideoList();
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
            return (
              <Link href={`/videos/${id}`} key={`${idx}-${id}`}>
                <VideoWrap>
                  <ImageWrap>
                    <Image
                      src={imageUrl}
                      fill={true}
                      alt={altText}
                      sizes="(max-width: 740px) 95vw, (max-width: 1000px) 48vw, (max-width: 1260px) 32vw, 24vw"
                    />
                    <TextWrap>
                      <VideoText>{title}</VideoText>
                    </TextWrap>
                  </ImageWrap>
                </VideoWrap>
              </Link>
            );
          })}
      </VideoSectionList>
    </VideoSectionWrap>
  );
};

export default VideoSection;
