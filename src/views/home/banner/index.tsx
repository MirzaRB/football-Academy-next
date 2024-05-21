import { Container } from "@/components";
import { Box, SxProps, Typography } from "@mui/material";

const wrapper: SxProps = {
  position: "relative",
  height: { md: "120vh", sm: "90vh", xs: "50vh" },
  backgroundImage: 'url("/images/home-banner.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
};

const title: SxProps = {
  fontSize: { md: "90px", sm: "70px", xs: "30px" },
  color: "text.secondary",
  fontWeight: 600,
};

const subtitle: SxProps = {
  fontSize: { md: "42px", sm: "35px", xs: "18px" },
  color: "text.secondary",
  fontWeight: 600,
};

const Banner = () => {
  return (
    <Box sx={wrapper}>
      <Container>
        <Box mt={{ md: -25, sm: -10, xs: -5 }}>
          <Typography sx={title} data-aos="fade-up">
            Knight’s Academy
          </Typography>
          <Typography sx={subtitle} data-aos="fade-up">
            Knights Fight As One
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
