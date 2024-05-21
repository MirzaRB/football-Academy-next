"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Drawer as MuiDrawer, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StarIcon from '@mui/icons-material/Star';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { MainHeader } from "@/components";
import ListItems from "./list-item";
import Tabs from "./tabs";
import { usePathname } from "next/navigation";

const header = {
  height: { xs: "60px", sm: "75px", md: "90px" },
};
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const centerLinks = [
  {
    title: "Home",
    fill: <HomeIcon sx={{ color: "white" }} />,
    icon: <HomeOutlinedIcon sx={{ color: "white" }} />,
    url: "/scout/dashboard/",
  },
  {
    title: "Favourites",
    fill: <StarIcon sx={{ color: "white" }} />,
    icon: <StarOutlineIcon sx={{ color: "white" }} />,
    url: "/scout/favourites/",
  },
];

const rightLinks = [
  {
    icon: <NotificationsNoneOutlinedIcon sx={{ color: "white" }} />,
    fill: <NotificationsIcon sx={{ color: "white" }} />,
    title: "Notification",
    url: "/dashboard/notification/",
  },
  {
    icon: <EmailOutlinedIcon sx={{ color: "white" }} />,
    fill: <EmailIcon sx={{ color: "white" }} />,
    title: "Message",
    url: "/dashboard/message/",
  },
];

const mobileLinks = [
  { title: "Home", url: "/scout/dashboard/" },
  { title: "Feed", url: "/scout/feed/" },
  // { title: "Notification", url: "/dashboard/favorite/" },
  // { title: "Message", url: "/dashboard/favorite/" },
  { title: "Profile", url: "/scout/profile/" },
  { title: "Settings", url: "/scout/settings/" },
  { title: "Logout", url: "/" },
];

export default function ClippedDrawer({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const [open, setOpen] = React.useState(matches ? false : true);

  const isHidden = pathname === "/scout/settings/";

  useEffect(() => {
    if (matches) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [matches]);

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "background.paper",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <MainHeader rightLinks={rightLinks}
      centerLinks={centerLinks}
      mobileLinks={mobileLinks}/>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          [`& .MuiDrawer-paper`]: {
            top: header.height,
            zIndex: 999,
          },
        }}
        open={open}
      >
        <ListItems />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, maxWidth: { xs: "100%", sm: "calc(100% - 65px)" } }}
      >
        <Toolbar sx={{ height: header.height }} />
        {!isHidden && <Tabs />}
        {children}
      </Box>
    </Box>
  );
}
