"use client";
import { ChipButton, Container } from "@/components";
import { Box, SxProps, Typography, Stack } from "@mui/material";

const chipLinks = [
  { title: "Players", url: "/sign-up?type=players" },
  { title: "Scouts", url: "/sign-up" },
  { title: "Coaches", url: "/sign-up" },
];

const wrapper: SxProps = {
  position: "relative",
  height: { md: "100vh", sm: "80vh", xs: "50vh" },
  backgroundImage: 'url("/images/helmet.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
};

const title: SxProps = {
  fontSize: { md: "90px", sm: "58px", xs: "30px" },
  color: "text.secondary",
  fontWeight: 600,
};

const subtitle: SxProps = {
  fontSize: { md: "42px", sm: "35px", xs: "18px" },
  color: "text.secondary",
  fontWeight: 500,
};

const btn: SxProps={
  border:'3px solid #777777',
  fontSize: { md: "14px", sm: "10px", xs: "8px" },
  width: { md: "90px", sm: "80px", xs: "60px" }
}

const JoinBanner = () => {
  return (
    <Box sx={wrapper}>
      <Container>
        <Box mt={{ md: -35, sm: -25, xs: -18 }}>
          <Typography sx={title} data-aos="fade-up">
            Passion for football?
          </Typography>
          <Typography sx={subtitle} data-aos="fade-up">
            Join our academy
          </Typography>
          <Stack mt={3} direction={'row'} alignItems={"center"} spacing={2} data-aos="fade-up"> 
            {chipLinks?.map((chip) => {
              return (
                <ChipButton
                  color="text.secondary"
                  title={chip.title}
                  hoverColor={"#f40809"}
                  redirectLink={chip.url}
                  key={chip.title}
                  sx={btn}
                />
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default JoinBanner;
