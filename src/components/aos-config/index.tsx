"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 0,
      duration: 600,
    });
  }, []);

  // useEffect(() => {
  //   AOS.refresh();
  // }, []);
  return null;
};

export default AOSInit;
