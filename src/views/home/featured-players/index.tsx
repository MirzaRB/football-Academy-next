"use client";

import { Container, Img } from "@/components";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const textPosition: SxProps = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  textAlign: "center",
  whiteSpace: "nowrap",
};

const wrapper: SxProps = {
  p: { xs: 2, md: 10 },
  background: "background.paper",
};

const greyBox: SxProps = {
  color: "text.secondary",
  backgroundColor: "neutral.700",
  textAlign: "left",
  p: 2,
};

const lightGreyBox: SxProps = {
  textAlign: "justify",
  backgroundColor: "neutral.300",
  p: 4,
};

const bgImg: SxProps = {
  backgroundImage: { xs: "none", lg: "url(/images/right-lines.png)" },
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const FeaturedPlayers = () => {
  const router = useRouter();

  return (
    <>
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box sx={textPosition}>
          <Typography
            color={"text.secondary"}
            variant="h1"
            fontSize={{ md: "64px", sm: "30px", xs: "24px" }}
          >
            Placeholder Text
          </Typography>
          <Typography
            color={"text.secondary"}
            fontSize={{ md: "16px", sm: "14px", xs: "12px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </Typography>
        </Box>
        <Img src="/images/football.png" alt="img" />
      </Box>
      <Box sx={wrapper}>
        <Container>
          <Box textAlign="center">
            <Typography variant="h1">Featured Players</Typography>
            <Typography variant="subtitle1" mt={5}>
              An organisation dedicated to linking UK American footballers with
              recruiters around the world. Through teaching game & positional
              fundamentals to personal development players can expect to compete
              to be best.
            </Typography>
            <Stack direction={{ md: "row", xs: "column" }} mt={6}>
              <Box sx={{ flex: 1 }}>
                <Box sx={greyBox}>
                  <Typography variant="subtitle1">Josh Lockwood</Typography>
                  <Typography variant="subtitle2">Height:</Typography>
                  <Typography variant="subtitle2">Weight:</Typography>
                </Box>
                <Img src="/images/player-1.png" alt="img" objectFit="contain" />
              </Box>
              <Stack gap={2} flex={2.5}>
                <Typography variant="subtitle1" sx={lightGreyBox}>
                  Josh has been playing for the Rushmoor Knights since October
                  2019. Since then he’s played 2 seasons for the U16’s as a
                  quarterback, winning a national championship and national MVP.
                  More recently he has played his first season of U19 in
                  Division 1. He has also represented GB U17 as special teams
                  captain and back up QB against Austria.
                  <br /> My aim is to make it to the USA and play college
                  football once I’ve finished my A-levels.
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box sx={bgImg}>
        <Box sx={wrapper}>
          <Container>
            <Box>
              <Stack direction={{ md: "row-reverse", xs: "column" }} mt={6}>
                <Box sx={{ flex: 1 }}>
                  <Box sx={greyBox}>
                    <Typography variant="subtitle1">Tom Conway</Typography>
                    <Typography variant="subtitle2">Height:</Typography>
                    <Typography variant="subtitle2">Weight:</Typography>
                  </Box>
                  <Img
                    src="/images/player-3.png"
                    alt="img"
                    objectFit="contain"
                  />
                </Box>
                <Stack gap={2} flex={2.5}>
                  <Typography variant="subtitle1" sx={lightGreyBox}>
                    Tom has been playing for the Knights for 2 years and has
                    recently graduated from the the U16 to U19’s. In the U16 Tom
                    has shown his technical ability and drive to become the
                    number 1 centre in the country. Also playing NT Tom has been
                    a producer on and off the field leading and motivating the
                    team as a captain. With starting positions with Great
                    Britain Lions U17 in 2022 (Austria) and now again for Norway
                    in 2023.
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction={{ md: "row", xs: "column" }} mt={6}>
                <Box sx={{ flex: 1 }}>
                  <Box sx={greyBox}>
                    <Typography variant="subtitle1">Jack Sheard</Typography>
                    <Typography variant="subtitle2">Height:</Typography>
                    <Typography variant="subtitle2">Weight:</Typography>
                  </Box>
                  <Img
                    src="/images/player-2.png"
                    alt="img"
                    objectFit="contain"
                  />
                </Box>
                <Stack gap={2} flex={2.5}>
                  <Typography variant="subtitle1" sx={lightGreyBox}>
                    Jack Sheard, has been playing for the Rushmoor Knights for
                    the last 3 years. In the U16 Jack had Played on both sides
                    of the ball dominantly and was instrumental in the national
                    finals in 2022. Continuing into the under 19’s team jack
                    continues to dominate on both sides of the ball being a top
                    scorer as wide receiver and the least amount of catches as a
                    cornerback. His althletism means that teams have flexibility
                    and has a team first attitude.
                    <br /> Future aspirations are to play at college level and
                    above in the USA.
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default FeaturedPlayers;
