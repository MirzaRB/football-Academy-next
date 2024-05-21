import * as React from "react";
import { Container as MuiContainer } from "@mui/material";

export default function Container({ children }: { children: JSX.Element }) {
  return <MuiContainer maxWidth={"lg"}>{children}</MuiContainer>;
}
