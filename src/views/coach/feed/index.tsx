"use client";
import React, {useRef, useState } from "react";
import {
  Box,
  Container,
  Stack,
  SxProps,
  Theme,
  Typography,
  styled,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { DefaultButton, FeedCard, Img, TextField } from "@/components";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Image from "next/image";
import VideoPlayer from "@/components/video-player";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const container: SxProps = {
  backgroundColor: "neutral.bgGrey",
  padding: { xs: "20px", sm: "40px", md: "60px" },
  borderTop: "13px solid #D9D9D9; ",
  mb: 4,
};
const postBoxWrap: SxProps = {
  marginTop: "40px",
  height: "auto",
  borderRadius: "4px",
  border: "1px solid #E4E4E4",
  backgroundColor: "#F1F1F1",
};
const composeBoxWrap: SxProps = {
  p: { xs: 2, md: 3 },
  borderRadius: "4px",
  border: "1px solid #E4E4E4",
  backgroundColor: "#FFF",
};

const postButtonsWrap: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "2px",
  justifyContent: "flex-end",
  marginTop: "10px",
};
const postButton: SxProps = {
  borderRadius: "4px",
  width: { xs: "70px", sm: "100px", md: "130px" },
  height: { xs: "30px", sm: "35px", md: "40px" },
};
const iconsWrap: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginTop: "8px",
};
const iconStyle: SxProps = {
  width: { xs: "20px", sm: "25px", md: "30px" },
  cursor: "pointer",
};
const closeIcon: SxProps = {
  position: "absolute",
  top: 20,
  right: 0,
  backgroundColor: "lightgray",
  "&:hover": {
    backgroundColor: "lightgray",
  },
};
const previewBox: SxProps = {
  position: "relative",
  width: { xs: "150px", sm: "160px", md: "170px" },
  height: { xs: "150px", sm: "170px", md: "190px" },
};
const videoPreviewBox: SxProps = {
  position: "relative",
  width: { xs: "200px", sm: "220px", md: "240px" },
  height: { xs: "150px", sm: "170px", md: "190px" },
};
const videoIconWrap: SxProps = {
  fontSize: {
    xs: "20px",
    sm: "40px",
    md: "60px",
    lg: "80px",
  },
};

const CoachFeedPage = () => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [videoSrc, setVideoSrc] = useState<string>("");
  const inputRef = useRef<any>();
  const videoRef = useRef<HTMLInputElement>(null);
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const handlePictureUpload = () => {
    inputRef.current.click();
  };
  const handleVideoUpload = () => {
    if (videoRef.current) {
      videoRef.current.click();
    }
  };
  const handleRemoveImage = () => {
    setImageSrc("");
  };
  const handleVideoImage = () => {
    setVideoSrc("");
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      type === "image"
        ? setImageSrc(URL.createObjectURL(file))
        : setVideoSrc(URL.createObjectURL(file));
    }
  };

  

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box sx={container}>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Typography
            sx={{ borderBottom: "5px solid black" }}
            variant={isMatched ? "h4" : "h3"}
            fontWeight={600}
          >
            Your Feed
          </Typography>
        </Box>
        <Box sx={postBoxWrap}>
          <Box m={2}>
            <Box sx={composeBoxWrap}>
              <Box>
                <TextField
                  className="no-scrollbar-text-area"
                  name="bio"
                  multiline
                  rows={4}
                  placeholder="Compose new post"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Box>
              {imageSrc !== "" && (
                <Box py={2} sx={previewBox}>
                  <Image
                    height={0}
                    width={0}
                    alt="picture"
                    src={imageSrc}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton onClick={handleRemoveImage} sx={closeIcon}>
                    <CancelOutlinedIcon />
                  </IconButton>
                </Box>
              )}
              {videoSrc !== "" && (
                <Box py={2} sx={videoPreviewBox}>
                  <VideoPlayer videoSource={videoSrc} iconSx={videoIconWrap} />
                  <IconButton onClick={handleVideoImage} sx={closeIcon}>
                    <CancelOutlinedIcon />
                  </IconButton>
                </Box>
              )}
              <Box sx={iconsWrap}>
                <Box sx={iconStyle} onClick={handlePictureUpload}>
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    onChange={(e)=>handleFileChange(e,"image")}
                  />
                  <Img alt="picture" src="/images/pictureIcon.svg" />
                </Box>
                <Box sx={iconStyle} onClick={handleVideoUpload}>
                  <VisuallyHiddenInput
                    type="file"
                    accept="video/mp4,video/x-m4v,video/*"
                    ref={videoRef}
                    onChange={(e)=>handleFileChange(e,"video")}
                  />
                  <Img alt="video" src="/images/videoIcon.svg" />
                </Box>
                <Box sx={iconStyle}>
                  <Img alt="microphone" src="/images/microphoneIcon.svg" />
                </Box>
              </Box>
            </Box>
            <Box sx={postButtonsWrap}>
              <DefaultButton variant="text" color="secondary">
                Post Later
              </DefaultButton>
              <DefaultButton
                variant="contained"
                color="secondary"
                sx={postButton}
              >
                Post
              </DefaultButton>
            </Box>
          </Box>
        </Box>
        <Stack mt={6} spacing={4}>
          <FeedCard
            name="B College"
            avatarPicture="/images/merch-header1.jpg"
            subtext="New Recruit etc"
          />
          <FeedCard
            name="B College"
            avatarPicture="/images/about-img.png"
            subtext="New Recruit etc"
            videoSrc="/videos/video1.mp4"
          />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DefaultButton
            variant="contained"
            color="secondary"
            sx={{px:{xs:2,sm:4,md:6},py:{xs:1,md:2}}}
          >
            View More
          </DefaultButton>
        </Box>
        </Stack>
      </Box>
    </Container>
  );
};
export default CoachFeedPage
