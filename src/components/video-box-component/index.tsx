"use client";
import { Box, SxProps, Typography } from "@mui/material";
import React, { useRef } from "react";
import StarIcon from "@mui/icons-material/Star";

interface IBoxComponent {
  date: string;
  handleVideoClick: (src: string) => void;
  videoSrc: string;
  featured?: string;
  title?: string;
  star?: boolean;
}

const boxWrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  cursor: "pointer",
};
const boxTitleBackgroundWrapper: SxProps = {
  backgroundColor: "#B7B7B7",
};
const textBoxWrapper: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const nextTextBoxWrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  margin: "12px 15px",
  gap: "20px",
  overflow: "hidden",
};

const VideoBoxComponent = ({
  date,
  handleVideoClick,
  videoSrc,
  featured,
  title,
  star,
}: IBoxComponent) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleMarkFeatured = (e: any) => {
    const videoSource = e;
    handleVideoClick(videoSource);
  };

  return (
    <Box sx={boxWrapper}>
      <video
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
        src={videoSrc}
        ref={videoRef}
      />
      <Box sx={boxTitleBackgroundWrapper}>
        <Box sx={textBoxWrapper}>
          <Box sx={nextTextBoxWrapper}>
            <Typography
              variant="h6"
              sx={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#737373" }}>
              {date}
            </Typography>
          </Box>
          <Box
            onClick={() => handleMarkFeatured(videoSrc)}
            sx={{ margin: "0px 15px" }}
          >
            {star && (
              <StarIcon
                fontSize="large"
                sx={{ color: featured === videoSrc ? "gold" : "black" }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoBoxComponent;
