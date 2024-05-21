import { Container, Img } from "@/components";
import { roboto } from "@/utils/fonts";
import { Box, SxProps, Typography, Grid } from "@mui/material";
import React from "react";

const ourAims = [
  "To provide an online platform for youth American football players and international coaches to connect.",
  "This will include individual Player Profiles with Standard Combine Stats.",
  "To provide an environment for players that want to go further in the sport to come hone their skills.",
  "To provide players with access to coaching that will ensure personal development.",
  "To provide an 11 a side format rather than 9 or 7 a side which gives opportunities for film and experience, invaluable for scouts.",
];

const ourFutureGoals = [
  "Help take UK youth American football to the next level.",
  "To provide positional skills session and personal development plans to hit individualised targets.",
  "Build a travelling squad for scrimmages/games against UK/European teams for key experience.",
  "Replicate the program regionally throughout the UK for 11 a-side formats.",
  "Hold guest coaching camps with top-rated players across different regions (either UK, European or USA based) to give players new opportunities to develop, expand their network and learn about future opportunities.",
];

const directorsList = [
  {
    id: "1",
    imgUrl: "/images/director-1.png",
    name: "Calvin Stitt",
    designation: "Coach",
  },
  {
    id: "2",
    imgUrl: "/images/director-2.png",
    name: "Tango Lockwood",
    designation: "Coach",
  },
  {
    id: "3",
    imgUrl: "/images/director-3.png",
    name: "Stephen Diaper",
    designation: "Coach",
  },
];

const wrapper: SxProps = {
  backgroundImage: { xs: "none", lg: "url(/images/left-lines.png)" },
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const textWrapper: SxProps = {
  width: "80%",
  mx: "auto",
};

const greyBox: SxProps = {
  color: "text.secondary",
  backgroundColor: "neutral.700",
  textAlign: "left",
  p: 2,
};

const flexBox: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

const AboutPage = () => {
  return (
    <Box>
      <Box sx={wrapper}>
        <Box mt={{ xs: 0, md: -12 }}>
          <Img src="/images/about-banner.png" alt="banner" />
        </Box>

        <Container>
          <>
            <Box sx={textWrapper}>
              <Typography
                variant="subtitle1"
                fontSize={32}
                fontWeight={400}
                textAlign={"center"}
                my={8}
                className={roboto.className}
              >
                An organisation that is dedicated to getting UK American
                footballers access to recruiters around the world. Through
                teaching game & positional fundamentals to personal development
                players can expect to compete to be best.
              </Typography>
            </Box>
            <Box sx={flexBox}>
              <Box sx={{ border: "2px solid black", width: "50px" }} />
                
              <Typography variant="subtitle2" fontWeight={600} >WHO WE ARE</Typography>
            </Box>

            <Typography variant="h2" mb={1}>
              About Us
            </Typography>
            <Typography variant="subtitle2">
              Based in Farnborough, Hampshire, The Rushmoor Knights Academy is
              an organisation dedicated to helping young players advance their
              skills and improve their game, while raising the standard of youth
              football in the UK. The team of qualified coaches have over thirty
              years combined experience of playing and working within the sport.
              <br />
              <br /> We are aiming to transition the youth programs to 11 a-side
              formats so that the progression of individual players through the
              age groups is natural in all aspects of the game and their skills
              can be clearly identified and developed.
              <br />
              <br /> There is no need to leave your local team, just come along
              and learn. This is an opportunity to take those skills back to
              your team and build on your abilities. We want players and coaches
              alike to come along to learn and progress to the next level.
              <br />
              <br />
              Players will be able to build a profile that showcases their
              skillsets in standardised benchmarks and events. We will provide
              the combines to build these profiles up in order to provide scouts
              with clear information on the standard of players throughout the
              UK from any aspect of the game. This will evolve into an
              alternative method for UK players to get recruited into teams
              around the world.
              <br />
              <br /> Through a team of dedicated and experienced coaches, our
              goal is to help, elevate and bring an alternative pathway for
              players to get access to scouts. We provide the opportunity, the
              players provide the commitment.
            </Typography>

            <Typography variant="h2" mt={3} mb={1}>
              Our Aim
            </Typography>
            <ul style={{ paddingLeft: "24px" }}>
              {ourAims.map((item, i) => (
                <li key={i}>
                  <Typography variant="subtitle2">{item}</Typography>
                </li>
              ))}
            </ul>

            <Typography variant="h2" mt={3} mb={1}>
              Our Future Goals
            </Typography>
            <ul style={{ paddingLeft: "24px" }}>
              {ourFutureGoals.map((item, i) => (
                <li key={i}>
                  <Typography variant="subtitle2">{item}</Typography>
                </li>
              ))}
            </ul>
          </>
        </Container>
        <Box my={10}>
          <Img src="/images/imgBottom.png" alt="border" />
        </Box>
      </Box>

      <Container>
        <>
          <Typography variant="h1" textAlign={"center"} mb={6}>
            Our Directors
          </Typography>
          <Grid container spacing={{ xs: 4, md: 6 }} mb={6}>
            {directorsList.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box>
                  <Img src={item.imgUrl} alt="director" />
                </Box>
                <Box sx={greyBox}>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Typography variant="subtitle2">
                    {item.designation}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      </Container>
    </Box>
  );
};

export default AboutPage;
