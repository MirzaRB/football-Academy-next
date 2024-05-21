"use client";

import { Container, Img } from "@/components";
import { Box, IconButton, Stack, SxProps, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

const wrapper: SxProps = {
  p: { xs: 2, md: 10 },
  backgroundColor: "background.paper",
  backgroundImage: { xs: "none", lg: "url(/images/left-lines.png)" },
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const typo: SxProps = {
  fontSize: { md: "24px", sm: "18px", xs: "14px" },
  fontWeight: 300,
};

const iconBtnWrapper: SxProps = { display: "flex", justifyContent: "end" };

const iconBtn: SxProps = {
  backgroundColor: "primary.main",
  "&: hover": {
    backgroundColor: "primary.light",
  },
};

const missionImage: SxProps = {
  position: "relative",
  height: { xs: "15vh", sm: "18vh", md: "27vh" },
  backgroundImage: 'url("/images/about-img-bottom.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
};
const objectiveBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
};

const AboutUs = () => {
  const router = useRouter();

  return (
    <Box sx={wrapper}>
      <Container>
        <Box textAlign="center">
          <Typography sx={typo}>Welcome to Knights Academy</Typography>
          <Typography variant="h1">About Us</Typography>
          <Stack direction={{ md: "row", xs: "column" }} gap={4} mt={6}>
            <Box sx={{ flex: 1 }}>
              <Img src="/images/about-img.png" alt="img" />
            </Box>
            <Stack gap={2} flex={1}>
              <Typography variant="h4">Where We Come From</Typography>
              <Typography variant="subtitle1" textAlign="justify">
                Based in Farnborough, Hampshire, The Rushmoor Knights Academy is
                an organisation dedicated to helping young players advance their
                skills and improve their game, while raising the standard of
                youth football in the UK. The team of qualified coaches have
                over thirty years combined experience of playing and working
                within the sport.
              </Typography>
              <Box sx={iconBtnWrapper}>
                <IconButton sx={iconBtn} onClick={() => router.push("about")}>
                  <ArrowForwardIcon sx={{ color: "text.secondary" }} />
                </IconButton>
              </Box>
            </Stack>
          </Stack>

          <Box sx={missionImage} mt={6}>
            <Typography
              color="text.secondary"
              fontSize={{ xs: 20, sm: 30, md: 36 }}
              ml={{ xs: 5, sm: 10, md: 12 }}
            >
              Mission Statement
            </Typography>
          </Box>

          <Stack direction={{ md: "row", xs: "column" }} gap={4} mt={6}>
            <Stack gap={2} flex={1}>
              <Typography variant="h4">Our Objectives</Typography>
              <Box sx={objectiveBox}>
                <Typography variant="subtitle1" textAlign="justify">
                  We are aiming to transition the youth programs to 11 a-side
                  formats so that the progression of individual players through
                  the age groups is natural in all aspects of the game and their
                  skills can be clearly identified and developed.
                </Typography>
                <Box sx={iconBtnWrapper}>
                  <IconButton sx={iconBtn} onClick={() => router.push("about")}>
                    <ArrowForwardIcon sx={{ color: "text.secondary" }} />
                  </IconButton>
                </Box>
              </Box>
            </Stack>
            <Box sx={{ flex: 1 }}>
              <Img src="/images/objective-img.png" alt="img" />
            </Box>
          </Stack>

          <Box mt={6}>
            <Img src="/images/logo-black-bg.png" alt="img" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
