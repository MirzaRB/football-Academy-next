import React from "react";
import { Box, SxProps, Typography } from "@mui/material";
import { DefaultButton } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IPlayerInfoCard {
  name: string;
  id: string | number;
  stats: string[];
  imageSrc: string;
  handleRoute: (id: string | number) => void;
}

const boxWrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  // height: "320px",
  backgroundColor: "#B7B7B7",
};

const boxTitleBackgroundWrapper: SxProps = {
  // height: "120px",
  padding: "20px",
};

const btnWrapper: SxProps = {
  padding: "7px",
  borderRadius: "8px",
  width: "90px",
  height: "35px",
  backgroundColor: "#8CC1FB",
  color: "black",
  "&:hover": {
    color: "white",
  },
};
const cardTextWrap: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "3px",
};
const cardPointWrap: SxProps = {
  width: "3px",
  height: "3px",
  backgroundColor: "primary.main",
  borderRadius: "20px",
};
const textWrap: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { xs: "column", md: "row" },
};
const statWrap: SxProps = {
  display: "flex",
  gap: "6px",
  flexWrap: "wrap",
  minHeight: "50px",
  mt: { xs: "2px", md: 0 },
};

const PlayerInfoCard = ({ name, id, stats, imageSrc,handleRoute }: IPlayerInfoCard) => {
  const route = useRouter();
  return (
    <Box sx={boxWrapper}>
      <Box sx={boxTitleBackgroundWrapper}>
        <Box sx={textWrap}>
          <Typography variant="h6">{name}</Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <DefaultButton
              variant="contained"
              sx={btnWrapper}
              onClick={() => handleRoute(id)}
              size="small"
            >
              Full Profile
            </DefaultButton>
          </Box>
        </Box>
        <Box sx={statWrap}>
          {stats.map((stat, index) => (
            <Box key={index} sx={cardTextWrap}>
              <Box sx={cardPointWrap}></Box>
              <Typography variant="body2">{stat}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ height: "200px" }}>
        <Image
          width={0}
          height={0}
          src={imageSrc}
          alt="loader"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default PlayerInfoCard;
