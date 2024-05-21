'use client'
import React from "react";
import { Box, Grid, Rating, Stack, SxProps, Typography } from "@mui/material";
import { DefaultButton } from "@/components";
import VideoPlayer from "../video-player";

interface IProps extends IPlayerReviewCard {
    handleAccept: () => void;
    handleReject: () => void;
  }

const mediaWrapper: SxProps = {
  aspectRatio: "auto",
};

const videoWrapper: SxProps = {
  fontSize: {
    xs: "50px",
    sm: "100px",
    md: "100px",
    lg: "130px",
  },
};

const buttonsWrap: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "70px",
};
const blueButton: SxProps = {
  borderRadius: "15px",
  backgroundColor: "background.paper",
  color: "text.primary",
  border: "3px solid #024F97",
  "&:hover": {
    color: "text.secondary",
    backgroundColor: "#024F97",
  },
  width: { xs: "80px", sm: "100px", md: "120px" },
  height: { xs: "30px", sm: "33px", md: "35px" },
};
const redButton: SxProps = {
  borderRadius: "15px",
  backgroundColor: "background.paper",
  color: "text.primary",
  border: "3px solid red",
  "&:hover": {
    color: "text.secondary",
    backgroundColor: "red",
  },
  width: { xs: "80px", sm: "100px", md: "120px" },
  height: { xs: "30px", sm: "33px", md: "35px" },
};

const PlayerReviewCard = ({
  name,
  rating,
  offdef,
  position,
  weight,
  height,
  handleAccept,
  handleReject,
  videoSrc,
}: IProps) => {
  return (
    <Box
      sx={{ backgroundColor: "background.paper", p: { xs: 2, sm: 4, md: 5 } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "15px", sm: "20px", md: "30px" },
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "20px", sm: "30px", md: "43px" } }}
              fontWeight={400}
            >
              {name}
            </Typography>
            <Rating
              name="rating"
              value={rating}
              precision={0.5}
              readOnly
              sx={{ color: "red" }}
            />
          </Box>
          <Stack mt={4} spacing={2}>
            <Typography variant="subtitle2">
              Offense/Defense: {offdef}
            </Typography>
            <Typography variant="subtitle2">Position: {position}</Typography>
            <Typography variant="subtitle2">Weight (IB): {weight}</Typography>
            <Typography variant="subtitle2">Height: {height}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Stack direction="column" spacing={3}>
            <Box sx={mediaWrapper}>
              <VideoPlayer videoSource={videoSrc} iconSx={videoWrapper} />
            </Box>
            <Box sx={buttonsWrap}>
              <DefaultButton variant="contained" onClick={handleAccept} sx={blueButton}>
                Accept
              </DefaultButton>
              <DefaultButton variant="contained" onClick={handleReject} sx={redButton}>
                Reject
              </DefaultButton>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayerReviewCard;
