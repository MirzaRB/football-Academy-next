import React from "react";
import { Box, SxProps, Container } from "@mui/material";
import ScoutAccount from "./account";
import ScoutPassword from "./password";

const wrapper: SxProps = {
  backgroundColor: "divider",
  padding: "40px 10px",
};

const ScoutSettingsPage = () => {
  return (
    <Box sx={wrapper}>
      <Container maxWidth="md">
        <ScoutAccount />
        <ScoutPassword />
      </Container>
    </Box>
  );
};

export default ScoutSettingsPage;
