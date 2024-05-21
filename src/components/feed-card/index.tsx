"use client";
import { Avatar, Box, Stack, SxProps, Typography } from "@mui/material";
import VideoPlayer from "../video-player";
import { Img } from "..";
import Image from "next/image";

const wrapper: SxProps = {
  mt: 6,
  backgroundColor: "#FFF",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};
const borderBox: SxProps = {
  height: "30px",
  backgroundColor: "#FFF",
  borderBottom: "1px solid #55565A",
};
const avatarStyle: SxProps = {
  width: { xs: "50px", sm: "100px", md: "150px" },
  height: { xs: "50px", sm: "100px", md: "150px" },
};
const avatarWrap: SxProps = {
  display: "flex",
  gap: { xs: "10px", sm: "15px", md: "20px" },
};
const mediaWrapper: SxProps = {
  px: { xs: 0, sm: 4, md: 16 },
  pb: { xs: 0, sm: 2, md: 6 },
  aspectRatio: "16:9",
};
const videoWrapper: SxProps = {
  fontSize: {
    xs: "80px",
    sm: "120px",
    md: "220px",
    lg: "280px",
  },
};

interface IFeedCard {
  name: string;
  avatarPicture: string;
  subtext: string;
  videoSrc?: string;
  imageSrc?: string;
}

const FeedCard = ({
  name,
  avatarPicture,
  subtext,
  videoSrc,
  imageSrc,
}: IFeedCard) => {
  return (
    <>
      <Box sx={wrapper}>
        <Box sx={borderBox}></Box>

        <Box p={4}>
          <Stack>
            <Box sx={avatarWrap}>
              <Avatar alt="img" src={avatarPicture} sx={avatarStyle} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" my={{ xs: 0, sm: 1 }}>
                  {name}
                </Typography>
                <Typography>{subtext}</Typography>
              </Box>
            </Box>

            <Box>
              {videoSrc && (
                <Box mt={3} sx={mediaWrapper}>
                  <VideoPlayer videoSource={videoSrc} iconSx={videoWrapper} />
                </Box>
              )}
              {imageSrc && (
                <Box mt={3} sx={mediaWrapper}>
                  <Image
                    width={0}
                    height={0}
                    src={imageSrc}
                    alt="loader"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              )}
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default FeedCard;
