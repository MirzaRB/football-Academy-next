import { Img } from "@/components";
import { Box } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#55565A",
      }}
    >
      <Box
        sx={{
          width: "300px",
          "@keyframes blink": {
            "0%": { opacity: 1 },
            "50%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          animation: "blink 1s infinite",
          "& img": {
            maxWidth: "100%",
          },
        }}
      >
        <Img src="/images/footer-logo.png" alt="loader" />
      </Box>
    </Box>
  );
};

export default Loading;
