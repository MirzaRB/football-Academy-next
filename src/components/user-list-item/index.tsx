import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Grid, SxProps, Typography } from "@mui/material";

const wrapper: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
};
const subtitleWrap: SxProps = {
  fontSize: "9px",
  fontWeight: 500,
  color: "#55565A",
};
const innerWrap: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const lightTextWrap: SxProps = {
  opacity: "0.4",
  fontSize: { xs: "10px", sm: "12px", md: "14px" },
};

interface IUserInfoItem {
  imgSrc: string;
  name: string;
  subtitle?: string;
  middletext?: string;
  time: string;
}

const UserInfoItem: React.FC<IUserInfoItem> = ({
  imgSrc,
  name,
  subtitle,
  middletext,
  time,
}: IUserInfoItem) => {
  return (
    <>
      {middletext ? (
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={innerWrap}>
              <Avatar
                alt="img"
                src={imgSrc}
                sx={{ width: "50px", height: "50px" }}
              />
              <Box ml={1}>
                <Typography variant="body2">{name}</Typography>
                {subtitle && (
                  <Typography sx={subtitleWrap}>{subtitle}</Typography>
                )}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={4} sx={{ textAlign: "center" }}>
            <Typography sx={lightTextWrap}>{middletext}</Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={4} sx={{ textAlign: "end" }}>
            <Typography sx={lightTextWrap}>{time}</Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={9} sm={7} md={6}>
            <Box sx={innerWrap}>
              <Avatar
                alt="img"
                src={imgSrc}
                sx={{ width: "50px", height: "50px" }}
              />
              <Box ml={1}>
                <Typography variant="body2">{name}</Typography>
                {subtitle && (
                  <Typography sx={subtitleWrap}>{subtitle}</Typography>
                )}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={3} sm={5} md={6} sx={{ textAlign: "end" }}>
            <Typography sx={lightTextWrap}>{time}</Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default UserInfoItem;
