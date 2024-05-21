import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, SxProps } from "@mui/material";

interface IVideoPlayer {
  videoSource: string;
  iconSx?: SxProps;
}

export default function VideoPlayer({ videoSource, iconSx }: IVideoPlayer) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLInputElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

    const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    e?.stopPropagation();
    if (videoRef.current && progressRef.current) {
      const newTime = parseFloat(progressRef.current.value);
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    setIsPlaying(false);
  }, [videoSource]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", () => {
        if (videoRef.current){
          setCurrentTime(videoRef.current.currentTime);
        }
      });
    }
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={videoSource}
        ref={videoRef}
        loop
      />
      <input
        type="range"
        ref={progressRef}
        value={currentTime}
        min="0"
        max={videoRef.current?.duration || 0}
        step="0.1"
        onChange={handleProgressChange}
        style={{
          width: "100%",
          position: "absolute",
          bottom: "0px",
          left:"0px",
          height: "6px"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "calc(50% - 10px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
        onClick={toggleVideo}
      >
        {!isPlaying && (
          <PlayArrowIcon
            sx={{
              color: "#D5D5D5",
              fontSize: { xs: "140px", sm: "180px", md: "220px", lg: "280px" },
              ...iconSx,
            }}
          />
        )}
      </Box>
    </Box>
  );
}
