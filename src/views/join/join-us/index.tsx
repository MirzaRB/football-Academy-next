import { Box, SxProps, Typography, Grid } from "@mui/material";
import { Container, Img, JoinCard } from "@/components";

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
  backgroundColor: "background.paper",
};

const headingWrapper: SxProps = {
  borderBottom: "1px solid black",
  borderTop: "1px solid black",
  p: { xs: 2, sm: 4, md: 6 },
  textAlign: "center",
};

const directorsList = [
  {
    imgUrl: "/images/join-athlete.png",
    name: "Athletes",
    des: "Looking for the next level in your football journey, let us help you realise that dream! Start your profile and highlight yourself to the scouts.",
    link: "/sign-up?type=players",
  },
  {
    imgUrl: "/images/join-scout.png",
    name: "Scouts",
    des: "You’ll get access to a UK database of youth American football players that want to progress in the game we all love.",
    link: "/sign-up",
  },
  {
    imgUrl: "/images/join-coach.png",
    name: "Coaches",
    des: "We’ve all loved the game and have received so much from the sport, is it time to give back and help the youth players on their journey.",
    link: "/sign-up",
  },
];

const JoinUs = () => {
  return (
    <>
      <Box sx={wrapper}>
        <Container>
          <Box textAlign="center">
            <Box p={{ xs: 1, sm: 4 }}>
              <Box sx={headingWrapper}>
                <Typography variant="h1">Join Us</Typography>
              </Box>
              <Box textAlign="start">
                <Typography variant="h2" mt={5} mb={{ xs: 3, md: 5 }}>
                  For Athletes, Scouts and Coaches
                </Typography>
                <Typography
                  variant="subtitle1"
                  textAlign="justify"
                  mb={{ xs: 1, md: 5 }}
                >
                  We will have a pathway to suit you, whether you are looking to
                  just develop your skills to the next level, or are aiming to
                  be recruited into foreign leagues like the NFL. Our aim is to
                  provide individual support and help you meet any personal
                  goals. Start the conversation with your coaches today and join
                  us to develop a plan together.
                </Typography>
              </Box>
            </Box>
            <Box mt={6}>
              <Grid container spacing={{ xs: 6, md: 3 }} mb={6}>
                {directorsList.map((item, i) => (
                  <Grid item sm={12} md={4} key={i}>
                    <JoinCard
                      title={item.name}
                      imageSrc={item.imgUrl}
                      description={item.des}
                      buttonLink={item.link}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
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
    </>
  );
};

export default JoinUs;
