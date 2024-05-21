import React from "react";
import { Box, SxProps, Typography, Container } from "@mui/material";
import Account from "./account";
import Password from "./password";

const wrapper: SxProps = {
  backgroundColor: "divider",
  padding: "40px 10px",
};

const AccountSetting = () => {
  return (
    <Box sx={wrapper}>
      <Container maxWidth="md">
        <Account />
        <Password />
      </Container>
    </Box>
  );
};
export default AccountSetting;
