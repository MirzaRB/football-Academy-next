import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";

interface InfoBoxProps {
  children: ReactNode;
  sx?: SxProps;
}

export default function InfoBox({ children, sx }: InfoBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "33px",
        backgroundColor: "#FEFEFF",
        boxShadow: "0px 1px 6px 0px rgba(0, 0, 0, 0.40)",
        padding: "40px",
        mx: "auto",
        maxWidth: 950,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
