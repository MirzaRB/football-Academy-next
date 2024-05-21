import { Header } from "../../components";
import { Box, SxProps } from "@mui/material";

const wrapper: SxProps = {
  position: "relative",
  height: {
    xs: "calc(100vh - 60px)",
    sm: "calc(100vh - 75px)",
    md: "calc(100vh - 90px)",
  },
  backgroundImage: 'url("/images/main-banner.png")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const AuthLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <Header variant="dark" />
      <Box sx={wrapper}>{children}</Box>
    </>
  );
};

export default AuthLayout;
