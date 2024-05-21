import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Img } from "..";
import { SxProps } from "@mui/material";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

interface ImageBoxProps {
  text: string;
  src: string;
  isActive: boolean;
  setActiveKey: (key: string) => void;
  imageBoxKey: string;
}

const wrapper = (isActive: boolean): SxProps => {
  return {
    borderRadius: "7px",
    width: "190px",
    height: "210px",
    backgroundColor: isActive ? "#F5F4F4" : "transparent",
    transition: "all 0.5s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: isActive ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" : "none",
  };
};

const imageWrap: SxProps = {
  position: "relative",
  width: "160px",
  height: "140px",
  cursor: "pointer",
};
const textWrap: SxProps = {
  position: "absolute",
  top: "88px",
  right: "0px",
  left: "0px",
  mx: "auto",
  textAlign: "center",
};
const outerWrap: SxProps = {
  height: "20px",
  width: "110px",
  borderRadius: "10px",
  background: "#333333",
  marginTop: "5px",
};

const ImageBox: FC<ImageBoxProps> = ({
  text,
  src,
  isActive,
  setActiveKey,
  imageBoxKey,
}) => {
  const router = useRouter();
  const handleClick = (imageBoxKey: string) => {
    router.push(imageBoxKey)
    setActiveKey(imageBoxKey);
  };
  return (
    <Box sx={wrapper(isActive)}>
      <Box sx={imageWrap} onClick={() => handleClick(imageBoxKey)}>
        <Box
          sx={{
            filter: isActive ? " " : "grayscale(1)",
            transition: "all 0.5s ease",
          }}
        >
          <Img src={src} alt="loader" />
        </Box>
        <Box sx={textWrap}>
          <Typography variant="body2" sx={{ color: "white" }}>
            {text}
          </Typography>
        </Box>
      </Box>
      {isActive && <Box sx={outerWrap}></Box>}
    </Box>
  );
};

export default ImageBox;
