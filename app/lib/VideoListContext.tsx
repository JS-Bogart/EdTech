"use client";
import React, {
  createContext,
  useContext,
  SetStateAction,
  useState,
  Dispatch,
  ReactNode,
} from "react";

type VideoListContextType = {
  getVideoList: () => void;
  setVideoList: Dispatch<SetStateAction<Array<any>>>;
  videoList: Array<any>;
};

const VideoListContext = createContext<VideoListContextType | undefined>(
  undefined
);

//Provider for access to the video list context. Allows child components to fetch
//and access the list of videos.
export const VideoListProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [videoList, setVideoList] = useState<Array<any>>([]);

  const getVideoList = () => {
    fetch(
      `https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=jeffrey_bogart`
    )
      .then((response) => response.json())
      .then((data) => setVideoList(data.videos));
  };

  return (
    <VideoListContext.Provider
      value={{
        getVideoList,
        videoList,
        setVideoList,
      }}
    >
      {children}
    </VideoListContext.Provider>
  );
};

export const useVideoList = (): VideoListContextType => {
  const context = useContext(VideoListContext);
  if (!context) {
    throw new Error("useVideoList must be used within a VideoListProvider");
  }
  return context;
};
