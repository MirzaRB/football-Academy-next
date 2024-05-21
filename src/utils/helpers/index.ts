"use client";

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("access_token");
  }

  return null;
};

export const exercises = [
  {
    icon: "/images/icon-park-solid_sporting.png",
    text: "Split",
    selected: false,
  },
  {
    icon: "/images/icon-park-solid_sport.png",
    text: "Dash",
    selected: false,
  },
  {
    icon: "/images/ic_round-sports-handball.png",
    text: "Vertical",
    selected: false,
  },
  {
    icon: "/images/material-symbols_sports-kabaddi-rounded.png",
    text: "Broad",
    selected: false,
  },
  {
    icon: "/images/bi_cone-striped.png",
    text: "3 Cone",
    selected: false,
  },
  {
    icon: "/images/game-icons_american-football-player.png",
    text: "Shuttle",
    selected: false,
  },
  {
    icon: "/images/game-icons_weight-lifting-up.png",
    text: "Bench",
    selected: false,
  },
];
