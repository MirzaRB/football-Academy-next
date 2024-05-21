"use client";
import React from "react";
import {
  Box,
  Grid,
  SxProps,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import { ChipButton, CircularProgressBar, InfoBox, UserInfoItem } from "@/components";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { notificationsAlerts } from "@/utils/mocks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";

const blueButtonWrap: SxProps = {
  border: "1px solid #024F97",
  width: "120px",
  "&:hover": {
    color: "text.secondary",
    backgroundColor: "#024F97",
  },
};
const redButtonWrap: SxProps = {
  border: "1px solid #f40809",
  "&:hover": {
    color: "text.secondary",
    backgroundColor: "#f40809",
  },
};
const hiddenWrap: SxProps = {
  opacity:0,
  cursor:'default'
};

const wrapper: SxProps = {
  backgroundColor: "background.paper",
  padding: "10px 10px",
  height: "100vh",
};

const welcomeWrapper: SxProps = {
  my: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "25px",
  borderRadius: "33px",
  backgroundColor: "#FEFEFF",
  boxShadow: "0px 1px 6px 0px rgba(0, 0, 0, 0.40)",
  p: 8,
};

const textWrapper: SxProps = {
  fontWeight: "400",
  whiteSpace: "nowrap",
};
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

const DashboardPage = () => {
  const { profilePercentage } = useSelector((state: RootState) => state.user);
  const preProfile = false;
  if (preProfile) {
    return (
      <Box sx={wrapper}>
        <Container>
          <>
            <Box sx={welcomeWrapper} mx="auto" width="100%">
              <Typography variant="h4" sx={textWrapper}>
                Welcome To Your Dashboard
              </Typography>
              <Typography variant="h6" sx={textWrapper}>
                Click Here To Get Started
              </Typography>
              <ChipButton
                color="text.primary"
                title="Create Profile"
                hoverColor={"#024F97"}
                sx={blueButtonWrap}
                redirectLink="/player/profile/"
              />
            </Box>
          </>
        </Container>
      </Box>
    );
  }

  return (
    <>
      <Container>
        <Grid container py={3} spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3} order={{ xs: 2, lg: 1 }}>
            <InfoBox sx={{height:'380px'}}>
              <Stack direction="column" spacing={6} sx={boxWrapper}>
                <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                  Target to Next Star
                </Typography>
                <CircularProgressBar progress={47} />
                <ChipButton
                  color="text.primary"
                  title="View"
                  sx={hiddenWrap}
                  redirectLink="#"
                />
              </Stack>
            </InfoBox>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} order={{ xs: 1, lg: 2 }}>
            <InfoBox>
              <Stack direction="column" spacing={2} sx={boxWrapper}>
                <Box sx={alertHeading}>
                  <Typography variant="h6" mb={1}>
                    Alerts
                  </Typography>
                  <NotificationsIcon />
                </Box>
                <Stack direction="column" sx={{ width: "100%" }}>
                  {notificationsAlerts.map((notification, index) => (
                    <Box key={index} py={1} sx={listItems}>
                      <UserInfoItem
                        key={index}
                        imgSrc={notification.src}
                        name={notification.name}
                        subtitle={notification.subtext}
                        time={notification.time}
                      />
                    </Box>
                  ))}
                </Stack>

                <ChipButton
                  color="text.primary"
                  title="View"
                  sx={redButtonWrap}
                  redirectLink="#"
                />
              </Stack>
            </InfoBox>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} order={{ xs: 3, lg: 3 }}>
            <InfoBox sx={{height:'380px'}}>
              <Stack direction="column" spacing={6} sx={boxWrapper}>
                <Typography variant="h6">Your Profile</Typography>
                <CircularProgressBar progress={profilePercentage} />
                <ChipButton
                  color="text.primary"
                  title="View"
                  sx={redButtonWrap}
                  redirectLink="/player/profile"
                />
              </Stack>
            </InfoBox>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashboardPage;
