import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
import { Box, SxProps } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { usePathname, useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/user-slice";

const items = [
  {
    title: "Dashboard",
    url: "/player/dashboard/",
    icon: <HomeOutlinedIcon />,
    fillIcon: <HomeIcon />,
  },
  {
    title: "Profile",
    url: "/player/profile/",
    icon: <PermIdentityIcon />,
    fillIcon: <PersonIcon />,
  },
  {
    title: "Settings",
    url: "/player/settings/",
    icon: <SettingsOutlinedIcon />,
    fillIcon: <SettingsIcon />,
  },
];

const listItem: SxProps = {
  transition: "all 0.5s ease-in-out",
  "&.Mui-selected": {
    backgroundColor: "#55565A",
    color: "#fff",
    "& .MuiListItemIcon-root": {
      color: "#fff",
    },
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#55565A",
  },
  // ":hover": {
  //   backgroundColor: "#55565A",
  //   color: "#fff",
  //   "& .MuiListItemIcon-root": {
  //     color: "#fff",
  //   },
  // },
};

const logoutButton: SxProps = {
  display: "flex",
  flexDirection: "column",
  height: "480px",
  justifyContent: "end",
};

const ListItems = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    router.push("/");
    dispatch(logout());
  };

  return (
    <Box sx={{ overflowY: "auto", overflowX: "hidden" }}>
      <List>
        {items.map((item, index) => {
          const activeTab = pathname === item.url;
          return (
            <ListItem
              key={index}
              disablePadding
              selected={activeTab}
              onClick={() => router.push(item.url)}
              sx={listItem}
            >
              <ListItemButton>
                <ListItemIcon>
                  {activeTab ? item.fillIcon : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box sx={logoutButton}>
        <List>
          <ListItem disablePadding onClick={handleLogout}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ListItems;
