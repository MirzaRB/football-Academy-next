"use client";
import React from "react";
import { RootState } from "@/redux/reducers";
import { useSelector } from "react-redux";
import CoachEditMode from "./edit-mode";
import CoachNormalMode from "./normal-mode";

const CoachProfilePage = () => {
  const { editMode } = useSelector((state: RootState) => state.coach);
  if (editMode) {
    return <CoachEditMode />;
  }
  return <CoachNormalMode/>;
};

export default CoachProfilePage;