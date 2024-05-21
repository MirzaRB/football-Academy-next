"use client";
import {
  Box,
  ListItem,
  Stack,
  SxProps,
  Drawer,
  List,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Img, Container, TextButton } from "..";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AccountMenu from "../account-popup";

const wrapper = (variant: string | null | undefined): SxProps => {
  return {
    background: variant === "light" ? "#ffffffa6" : "#55565A",
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

export default function MainHeader({
  variant,
  rightLinks,
  centerLinks,
  mobileLinks,
}: IMainHeader) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

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
              {centerLinks?.map((item, i) => {
                const activeTab = pathname === item.url;
                return (
                  <Tooltip title={item.title} key={i}>
                    <IconButton onClick={() => router.push(item.url)}>
                      {activeTab ? item.fill : item.icon}
                    </IconButton>
                  </Tooltip>
                );
              })}
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={1.3}
              sx={buttonWrap}
            >
              {rightLinks?.map((item, i) => {
                return (
                  <Tooltip title={item.title} key={i}>
                    <IconButton>{item.icon}</IconButton>
                  </Tooltip>
                );
              })}

              <AccountMenu src={""} />
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
                    {mobileLinks.map((item, index) => (
                      <ListItem
                        sx={drawerItems}
                        onClick={() => setIsDrawerOpen(false)}
                        key={index}
                      >
                        <TextButton
                          color={variant === "light" ? "#000" : "#fff"}
                          title={item.title}
                          hoverColor={"#f40809"}
                          redirectLink={item.url}
                          key={item.title}
                        />
                      </ListItem>
                    ))}
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
