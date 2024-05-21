"use client";
import { Box, LinearProgress, linearProgressClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#FFE5D3",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FF3A29" : "#FF3A29",
  },
}));

import React from "react";

const LinearProgressBar = ({ progress }: { progress: number }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default LinearProgressBar;
