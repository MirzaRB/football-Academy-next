import { Box, SxProps, Typography } from "@mui/material";
import React from "react";
import { ChipButton } from "..";

const wrapper: SxProps = {
  backgroundColor: "background.paper",
  minHeight: "82px",
};

const titleWrapper: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#333333",
  color: "#fff",
  py: 1,
  px: 2,
};

const childrenWrapper: SxProps = {
  py: 1,
  px: 2,
};

const LabelCard = ({
  title,
  children,
  showBtn = false,
  handleonClick,
  titleSx
}: {
  title: string;
  children: ReactNode;
  showBtn?: boolean;
  titleSx?:SxProps;
  handleonClick?: () => void;
}) => {
  return (
    <Box sx={wrapper}>
      <Box sx={titleWrapper}>
        <Typography sx={titleSx} variant="body2">{title}</Typography>
        {showBtn && (
          <ChipButton
            redirectLink="#"
            title="Edit"
            color="#fff"
            hoverColor="red"
            sx={{ p: 0 }}
            onClick={handleonClick}
          />
        )}
      </Box>
      <Box sx={childrenWrapper}>{children}</Box>
    </Box>
  );
};

export default LabelCard;
