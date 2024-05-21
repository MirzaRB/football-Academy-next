"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Img } from "..";
import { useRouter } from "next/navigation";

const UnAuthorized = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (counter === 0) {
      // Redirect to the home page when the counter reaches 0
      router.push("/");
    }
  }, [counter, router]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#55565A",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "200px",
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

      <Box>
        <Typography variant="body1" color="text.secondary">
          You are not authorized to access this page
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          fontSize={13}
        >
          You will be redirect to home page in {counter} seconds
        </Typography>
      </Box>
      <Button variant="contained" href="/">
        Go to home page
      </Button>
    </Box>
  );
};

export default UnAuthorized;
