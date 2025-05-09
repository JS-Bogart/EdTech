"use client";
import React, { useRef, useState } from "react";
import {
  VPComponent,
  SRWrapper,
  StyledReactPlayer,
  VideoTitle,
  VideoDescription,
  PlayerWrapper,
  PlayerInner,
  Controls,
  Button,
  VolumeSlider,
  Progress,
  SpeedSelect,
  OverlayPlayButton,
  OverlayInner,
  IconTextWrap,
  TimeTracker,
  ControlsTop,
  ControlsBottom,
  ControlsSides,
  FilterWrap,
} from "./VideoPlayerStyles";
import ReactPlayer from "react-player/youtube";
import type { OnProgressProps } from "react-player/base";
import {
  SoundIcon,
  MuteIcon,
  PauseIcon,
  EnterFullscreenIcon,
  ExitFullscreenIcon,
} from "@/app/public/icons";
import { formatTime } from "@/app/lib";
import { useCheckScreenSize } from "@/app/lib/useCheckScreenSize";

interface VideoPlayerProps {
  videoData: {
    video_url: string;
    title: string;
    description: string;
  };
  autoplay?: boolean;
}

//This is the video player, which includes custom styled controls.
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoData }) => {
  const { video_url, title, description } = videoData;

  const playerRef = useRef<ReactPlayer>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useCheckScreenSize(800);

  const togglePlay = () => setPlaying((prev) => !prev);
  const toggleMute = () => setMuted((prev) => !prev);

  //Handles the logic for the video volume bar in the controls
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setMuted(vol === 0);
  };

  //Handles the logic for the video progress bar in the controls
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setPlayed(val);
    playerRef.current?.seekTo(val, "fraction");
  };

  //Changes the video speed when a particular speed is selected from the dropdown
  const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseFloat(e.target.value);
    setSpeed(val);
  };

  //This function toggles fullscreen on the video when the fullscreen icon is
  //clicked in the video controls
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      setIsFullscreen(true);
      containerRef.current?.requestFullscreen();
    } else {
      setIsFullscreen(false);
      document.exitFullscreen();
    }
  };

  //Hides the controls after 2 seconds of the mouse not moving over the video player
  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);

    hideControlsTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  return (
    <VPComponent>
      <VideoTitle>{title}</VideoTitle>
      <VideoDescription>{description}</VideoDescription>
      <SRWrapper>
        <PlayerWrapper ref={containerRef} onMouseMove={handleMouseMove}>
          <PlayerInner>
            <FilterWrap $filter={playing}>
              <StyledReactPlayer
                ref={playerRef}
                url={video_url}
                playing={playing}
                volume={volume}
                muted={muted}
                playbackRate={speed}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onProgress={(progress: OnProgressProps) => {
                  setPlayed(progress.played);
                  setPlayedSeconds(progress.playedSeconds);
                }}
                onDuration={(duration: number) => setDuration(duration)}
                progressInterval={500}
                width="100%"
                height="100%"
                controls={false}
                config={{
                  youtube: {
                    playerVars: {
                      modestbranding: 1,
                      rel: 0,
                      showinfo: 0,
                      controls: 0,
                      disablekb: 1,
                    },
                  },
                }}
              />
            </FilterWrap>
            {!playing && (
              <OverlayPlayButton onClick={togglePlay}>
                <OverlayInner>▶</OverlayInner>
              </OverlayPlayButton>
            )}
          </PlayerInner>
          <Controls $visible={showControls}>
            <ControlsTop>
              <Progress
                min={0}
                max={1}
                step={0.0001}
                value={played}
                onChange={handleProgressChange}
              />
            </ControlsTop>
            <ControlsBottom>
              <ControlsSides>
                <Button onClick={togglePlay}>
                  {playing ? (
                    <IconTextWrap>
                      <PauseIcon /> &nbsp;{"Pause"}
                    </IconTextWrap>
                  ) : (
                    `▶${isMobile ? "" : "Play"}`
                  )}
                </Button>
                <div style={{ margin: `0px ${isMobile ? "5px" : "10px"}` }}>
                  <Button onClick={toggleMute}>
                    {muted ? <MuteIcon /> : <SoundIcon />}
                  </Button>
                </div>
                <VolumeSlider
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={handleVolume}
                />
              </ControlsSides>
              <ControlsSides>
                <TimeTracker>
                  {formatTime(playedSeconds)} / {formatTime(duration)}
                </TimeTracker>
                <SpeedSelect value={speed} onChange={handleSpeedChange}>
                  {[0.5, 1, 1.25, 1.5, 2].map((rate) => (
                    <option key={rate} value={rate}>
                      {rate}×
                    </option>
                  ))}
                </SpeedSelect>
                <Button onClick={toggleFullscreen}>
                  {isFullscreen ? (
                    <ExitFullscreenIcon />
                  ) : (
                    <EnterFullscreenIcon />
                  )}
                </Button>
              </ControlsSides>
            </ControlsBottom>
          </Controls>
        </PlayerWrapper>
      </SRWrapper>
    </VPComponent>
  );
};

export default VideoPlayer;
