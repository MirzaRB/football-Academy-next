"use client";
import { PlayerReviewCard } from "@/components";
import {
  Box,
  Container,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const container: SxProps = {
  backgroundColor: "#E5E5E5",
  padding: { xs: "20px", sm: "40px", md: "60px" },
  mb: 4,
};

const playerData: IPlayerReviewCard[] = [
  {
    name: "John Smith",
    rating: 4.5,
    offdef: "Offense",
    position: "Center",
    weight: "100kg",
    height: "177.8cm",
    videoSrc: "/videos/video1.mp4",
  },
  {
    name: "John Smith",
    rating: 4.5,
    offdef: "Offense",
    position: "Center",
    weight: "100kg",
    height: "177.8cm",
    videoSrc: "/videos/video1.mp4",
  },
  {
    name: "John Smith",
    rating: 4.5,
    offdef: "Offense",
    position: "Center",
    weight: "100kg",
    height: "177.8cm",
    videoSrc: "/videos/video1.mp4",
  },
];

const CoachPlayerReviewPage = () => {
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const handleAccept = () => {
    console.log("Accepted");
  };
  const handleReject = () => {
    console.log("Rejected");
  };
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box sx={container}>
        <Box>
          <Typography variant={isMatched ? "h4" : "h3"} fontWeight={500}>
            Player Review
          </Typography>
        </Box>
        {playerData.map((item, index) => (
          <Box mt={4} key={index}>
            <PlayerReviewCard
              {...item}
              handleAccept={handleAccept}
              handleReject={handleReject}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default CoachPlayerReviewPage;
