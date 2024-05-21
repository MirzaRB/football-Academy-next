import React from "react";
import { Box, Container, Stack, SxProps, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { playersAlerts } from "@/utils/mocks";
import { InfoBox, UserInfoItem } from "@/components";

const boxWrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
const alertHeading: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
};

const listItems: SxProps = {
  borderBottom: "1px solid #B0A9A9",
  py: 1,
};

const CoachDashboardPage = () => {
  return (
    <Container>
      <InfoBox>
        <Stack direction="column" spacing={2} sx={boxWrapper}>
          <Box sx={alertHeading}>
            <Typography variant="h6" mb={1} sx={{ opacity: "0.4" }}>
              Players Alerts
            </Typography>
            <NotificationsIcon />
          </Box>
          <Stack direction="column" sx={{ width: "100%" }}>
            {playersAlerts.map((notification, index) => (
              <Box key={index} py={1} sx={listItems}>
                <UserInfoItem
                  key={index}
                  imgSrc={notification.src}
                  name={notification.name}
                  middletext={notification.middletext}
                  time={notification.time}
                />
              </Box>
            ))}
          </Stack>
        </Stack>
      </InfoBox>
    </Container>
  );
};

export default CoachDashboardPage;
