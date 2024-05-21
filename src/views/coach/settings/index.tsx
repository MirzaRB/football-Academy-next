import React from "react";
import { Box, SxProps, Container } from "@mui/material";
import CoachAccount from "./account";
import CoachPassword from "./password";


const wrapper: SxProps = {
  backgroundColor: "divider",
  padding: "40px 10px",
};

const CoachSettingsPage = () => {
  return (
    <Box sx={wrapper}>
      <Container maxWidth="md">
        <CoachAccount />
        <CoachPassword />
      </Container>
    </Box>
  );
};

export default CoachSettingsPage