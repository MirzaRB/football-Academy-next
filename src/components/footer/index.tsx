import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Typography,
  Grid,
  SxProps,
} from "@mui/material";
import Container from "../container";
import { MdCopyright } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import Img from "../image";
import { TextButton } from "..";

const wrapper: SxProps = {
  background: "#F6F6F6",
  py: 6,
  zIndex: 1,
};
const copyrightWrapper: SxProps = {
  color: "#000",
  fontSize: 12,
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  gap: 0.5,
};

export default function Footer() {
  const socials = [
    { icon: <BiLogoInstagramAlt color="#000" />, size: "40px" },
    { icon: <AiFillLinkedin color="#000" />, size: "37px" },
    { icon: <AiFillFacebook color="#000" />, size: "37px" },
  ];

  const routes = [
    {
      title: "Navigation",
      links: [
        { title: "About", url: "/about" },
        { title: "Home", url: "/" },
        { title: "Contact Us", url: "/contact-us" },
        { title: "Merchandise", url: "/merchandise" },
        { title: "Join", url: "/join" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About Us", url: "/about" },
        { title: "Our mission and vision", url: "/about" },
        { title: "Our team", url: "/about" },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Contact Us", url: "/contact-us" },
        { title: "Login", url: "/login/?type=player" },
      ],
    },
  ];

  return (
    <Box sx={wrapper}>
      <Container>
        <>
          <Grid container m={2} spacing={{ xs: 1, sm: 3, md: 6 }} mb={8}>
            {routes?.map((route) => {
              return (
                <Grid item xs={6} sm={3} md={2} key={route.title}>
                  <Box>
                    <Typography
                      sx={{
                        marginBottom: "10px",
                      }}
                      variant="h6"
                    >
                      {route.title}
                    </Typography>
                    <Stack spacing={1}>
                      {route.links?.map((text) => {
                        return (
                          <TextButton
                            color={"#000"}
                            title={text.title}
                            hoverColor={"#f40809"}
                            redirectLink={text.url}
                            key={text.title}
                          />
                        );
                      })}
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
            <Grid item xs={6} sm={3} md={6}>
              <Box sx={{ maxWidth: "180px", height: "160px", mx: "auto",mr:{xs:'80px',sm:'30px'} }}>
                <Link href="/">
                <Img
                  alt="logo"
                  src="/images/footer-logo.png"
                  objectFit="contain"
                  />
                  </Link>
              </Box>
            </Grid>
          </Grid>

          <Stack
            direction={{ md: "row", xs: "column" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={2}
          >
            <Stack width={{ md: "75%", xs: "100%" }} order={{ md: 1, xs: 2 }} spacing={2}>
              <Typography sx={copyrightWrapper} mt={2}>
                Copyright <MdCopyright /> 2023. All rights reserved
              </Typography>
              <Typography sx={copyrightWrapper}>
                Created by
                <Link
                  href="https://www.particularagency.co.uk/"
                  target="_blank"
                >
                  Particular Agency
                </Link>
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              width={{ md: "25%", xs: "100%" }}
              order={{ md: 2, xs: 1 }}
            >
              {socials?.map((icon, iconIndex) => {
                return (
                  <IconButton
                    key={`social${iconIndex}`}
                    style={{
                      fontSize: icon.size,
                      height: icon.size,
                      width: icon.size,
                      padding: 0,
                    }}
                  >
                    {icon.icon}
                  </IconButton>
                );
              })}
              <Button
                href="/contact-us"
                sx={{
                  borderRadius: "40px",
                  background: "#FFF",
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: 600,
                  px: 4,
                  ml: 2,
                  whiteSpace: "nowrap",
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Stack>
        </>
      </Container>
    </Box>
  );
}
