"use client";
import {
  Box,
  ListItem,
  Stack,
  SxProps,
  Drawer,
  List,
  IconButton,
} from "@mui/material";
import { Img, Container, TextButton, ChipButton } from "../../components";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const wrapper = (variant: string | null | undefined): SxProps => {
  return {
    background: variant === "light" ? "#ffffffa6" : "#000",
    height: { xs: "60px", sm: "75px", md: "90px" },
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
    position: "fixed",
    width: "100%",
  };
};

const imgBox: SxProps = {
  width: { sm: "190px", xs: "120px" },
  height: { sm: "60px", xs: "40px" },
};

const navbarWrap: SxProps = {
  mb: { md: 0, xs: 2 },
  mt: { md: 0, xs: 1 },
  display: {
    md: "flex",
    xs: "none",
  },
};

const buttonWrap: SxProps = {
  display: {
    md: "flex",
    xs: "none",
  },
};

const drawerBtn: SxProps = {
  marginLeft: "auto",
  display: {
    md: "none",
    xs: "flex",
  },
};
const closeBtn = (variant: string | null | undefined): SxProps => {
  return {
    color: variant === "light" ? "text.primary" : "text.secondary",
    "&:hover": { color: "error.main" },
  };
};
const drawerItems: SxProps = {
  borderBottom: "1px solid #4b4040",
  padding: "15px 20px",
  display: "block",
  textAlign: "center",
};
const drawerButtonWrapper: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row", md: "row" },
};
const drawerBtns: SxProps = {
  padding: "15px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Header({ variant }: IHeader) {
  const [activeService, setActiveservice] = useState<number | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const textLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about/" },
    { title: "Join", url: "/join/" },
    { title: "Merchandise", url: "/merchandise/" },
    { title: "Contact Us", url: "/contact-us/" },
  ];

  const chipLinks = [
    { title: "Players", url: "/login?type=player" },
    { title: "Scouts", url: "/login?type=scout" },
    { title: "Coaches", url: "/login?type=coach" },
  ];

  return (
    <>
      <Box sx={wrapper(variant)}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"column"}>
              <Box sx={imgBox}>
                <Link href="/">
                  <Img alt="logo" src="/images/logo.png" objectFit="contain" />
                </Link>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              sx={navbarWrap}
            >
              {textLinks?.map((text) => {
                return (
                  <TextButton
                    color={
                      variant === "light"
                        ? location === text.url
                          ? "#f40809"
                          : "#000"
                        : location === text.url
                        ? "#f40809"
                        : "#fff"
                    }
                    title={text.title}
                    hoverColor={"#f40809"}
                    redirectLink={text.url}
                    key={text.title}
                  />
                );
              })}
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1.3}
              sx={buttonWrap}
            >
              {chipLinks?.map((chip, index) => {
                const color = variant === "light" ? "#000" : "#fff";
                return (
                  <ChipButton
                    color={color}
                    title={chip.title}
                    hoverColor={"#f40809"}
                    redirectLink={chip.url}
                    key={chip.title}
                    index={index}
                    setActive={setActiveservice}
                    sx={{
                      border:
                        index === activeService
                          ? "2px solid #f40809"
                          : `2.5px solid ${color}`,
                    }}
                  />
                );
              })}
            </Stack>
            <IconButton
              sx={drawerBtn}
              size="large"
              edge="start"
              aria-label="logo"
              onClick={toggleDrawer}
            >
              <MenuIcon
                sx={{
                  color:
                    variant === "light" ? "text.primary" : "text.secondary",
                }}
              />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: {
                  backgroundColor:
                    variant === "light" ? "background.paper" : "primary.main",
                  width: "100%",
                },
              }}
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box sx={{ alignSelf: "end" }}>
                <IconButton
                  sx={{
                    margin: "12px 16px 5px 0px",
                  }}
                  size="medium"
                  onClick={toggleDrawer}
                >
                  <CloseIcon sx={closeBtn(variant)} />
                </IconButton>
              </Box>
              <Box>
                <Box>
                  <List>
                    {textLinks.map((item, index) => (
                      <ListItem
                        sx={drawerItems}
                        onClick={() => setIsDrawerOpen(false)}
                        key={index}
                      >
                        <TextButton
                          color={
                            variant === "light"
                              ? location === item.url
                                ? "#f40809"
                                : "#000"
                              : location === item.url
                              ? "#f40809"
                              : "#fff"
                          }
                          title={item.title}
                          hoverColor={"#f40809"}
                          redirectLink={item.url}
                          key={item.title}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <List sx={drawerButtonWrapper}>
                    {chipLinks?.map((item, index) => {
                      return (
                        <ListItem
                          sx={drawerBtns}
                          onClick={() => setIsDrawerOpen(false)}
                          key={index}
                        >
                          <ChipButton
                            color={variant === "light" ? "#000" : "#fff"}
                            title={item.title}
                            hoverColor={"#f40809"}
                            redirectLink={item.url}
                            key={item.title}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Box>
            </Drawer>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ marginBottom: { xs: "60px", sm: "75px", md: "90px" } }} />
    </>
  );
}
