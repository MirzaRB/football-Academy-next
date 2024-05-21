/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { UnAuthorized } from "../../components";
import ClippedDrawer from "./dashboard-layout";
import { getAccessToken } from "@/utils/helpers";
import Loading from "@/app/loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { setToken, setUser } from "@/redux/slices/user-slice";
import { AppDispatch } from "@/redux/store";

const DashboardLayout = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [loader, setLoader] = useState<boolean>(true);
  const { token, user } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const setAppState = () => {
    setLoader(true);
    const accessToken = getAccessToken();
    dispatch(setToken(accessToken));
    dispatch(
      setUser({
        id: "1",
        name: "player",
        email: "user@example.com",
        role: "player",
        createdAt: "2023-09-13",
      })
    );
    setLoader(false);
  };

  useEffect(() => {
    //on refresh page
    if (!token) {
      setAppState();
    }
  }, [token]);

  if (loader && !token && !user) {
    return <Loading />;
  } else if (token && user?.role === "player") {
    return <ClippedDrawer>{children}</ClippedDrawer>;
  } else if (!loader && !token) return <UnAuthorized />;
  else return <UnAuthorized />;
};

export default DashboardLayout;
