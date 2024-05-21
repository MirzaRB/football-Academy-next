"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Img } from "..";

interface IExerciseCard {
  icon: string;
  text: string;
  selected: boolean;
  isSelectable?: boolean;
  onSelect: (text: string, selected: boolean) => void;
}

const ExerciseCard = ({
  icon,
  text,
  selected,
  isSelectable,
  onSelect,
}: IExerciseCard) => {
  const [isClicked, setIsClicked] = useState(selected);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e?.stopPropagation();
    if (isSelectable) {
      setIsClicked(!isClicked);
      onSelect(text, !isClicked);
    }
  };
  return (
    <Box
      sx={{
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: isClicked ? "#AABBCB" : "background.paper",
        transition: "all 0.8s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width:{xs:"40px",sm:"55px",md:"75px"},
        height: {xs:"40px",sm:"55px",md:"75px"},
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Box >
        <Img src={icon} alt="icon" />
      </Box>
      <Typography sx={{fontSize:{xs:'8px',sm:'10px',md:'14px'},whiteSpace:'nowrap'}}>{text}</Typography>
    </Box>
  );
};

export default ExerciseCard;
