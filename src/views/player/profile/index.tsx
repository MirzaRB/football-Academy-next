"use client";
import React , {useState}from "react";

import EditMode from "./edit-mode";
import NormalMode from "./normal-mode";
import { RootState } from "@/redux/reducers";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { editMode } = useSelector((state: RootState) => state.profile);
  if (editMode) {
    return <EditMode />;
  }
  return <NormalMode/>;
};

export default ProfilePage;
