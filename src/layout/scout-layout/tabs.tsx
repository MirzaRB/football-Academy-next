"use client";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ImageBox, TextField } from "@/components";
import { Box, Stack, SxProps, Container } from "@mui/material";
import { usePathname } from 'next/navigation'

const boxItems = [
  {
    text: "Database",
    src: "/images/player-dash1.png",
    imageBoxUrl: "/scout/database/",
  },
  {
    text: "Alerts",
    src: "/images/player-dash2.png",
    imageBoxUrl: "/scout/alerts/",
  },
  {
    text: "Feed",
    src: "/images/player-dash3.png",
    imageBoxUrl: "/scout/feed/",
  },
  {
    text: "Favourites",
    src: "/images/player-dash4.png",
    imageBoxUrl: "/scout/favourites/",
  },
];

const seacrhWrapper: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  padding: "15px 30px",
  gap: "2px",
  alignItems: "center",
};
const stackWrapper: SxProps = {
  display: "flex",
  pb: 1,
  flexDirection: "row",
  width: "100%",
  overflowX: "scroll",
  justifyContent: { md: "center", xs: " " },
};

const Tabs = () => {
  const pathname = usePathname()
  const [activeItemId, setActiveItemId] = useState<string>(pathname);

  useEffect(()=>{
    setActiveItemId(pathname)
  },[pathname])

  return (
    <Container sx={{ pb: 3, maxWidth: "100%" }}>
      <Box sx={seacrhWrapper}>
        <SearchIcon />
        <TextField
          sx={{ width: "67px" }}
          size="small"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          type="search"
          name="search"
          placeholder="Search"
        />
      </Box>
      <Box mx="auto">
        <Stack className="no-scrollbar" sx={stackWrapper}>
          {boxItems.map((item, index) => (
            <Box key={index}>
              <ImageBox
                text={item.text}
                src={item.src}
                isActive={item.imageBoxUrl === activeItemId}
                imageBoxKey={item.imageBoxUrl}
                setActiveKey={setActiveItemId}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Tabs;
