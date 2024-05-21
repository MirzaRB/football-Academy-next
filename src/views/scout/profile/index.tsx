"use client";
import React from "react";
import ScoutNormalMode from "./normal-mode";
import ScoutEditMode from "./edit-mode";
import { RootState } from "@/redux/reducers";
import { useSelector } from "react-redux";

const ScoutProfilePage = () => {
  const { editMode } = useSelector((state: RootState) => state.scout);
  if (editMode) {
    return <ScoutEditMode />;
  }
  return <ScoutNormalMode/>;
};

export default ScoutProfilePage;
