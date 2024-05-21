"use client";
import React from "react";
import { RootState } from "@/redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { DefaultButton, LabelCard } from "@/components";
import {
  Container,
  Box,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { AppDispatch } from "@/redux/store";
import { __String } from "typescript";
import { updateProfile } from "@/redux/slices/scout-slice";
import Image from "next/image";

const container: SxProps = {
  backgroundColor: "neutral.bgGrey",
  padding: { xs: "20px", sm: "40px", md: "60px" },
  mb: 4,
};

const btnWrapper: SxProps = {
  borderRadius: "50px",
  backgroundColor: "#AABBCB",
  color: "text.secondary",
  height: "20px",
  width: "80px",
  "&:hover": {
    background: "#839aac",
  },
};
const profilePictureWrapper: SxProps = {
  position: "relative",
  height: "317px",
  width: "100%",
  backgroundColor: "white",
  img: {
    height: "100% !important",
  },
};

const textWrap: SxProps = {
  pt: "3px",
  fontSize: { xs: "14px", md: "16px" },
  fontWeight: "400",
  whiteSpace: "nowrap",
  height: "32px",
};
const textAreaWrap: SxProps = {
  fontSize: { xs: "15", md: "19px" },
  fontWeight: "400",
  py: "2px",
};

const ScoutNormalMode = () => {
  const { initialValues } = useSelector((state: RootState) => state.scout);
  const dispatch: AppDispatch = useDispatch();
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const handleEditClick = () => {
    dispatch(updateProfile({ editMode: true }));
  };

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box sx={container}>
        <Box>
          <Typography variant={isMatched ? "h4" : "h3"} fontWeight={500}>
            Your Profile
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={1}
          my={5}
        >
          <Box width="267px">
            <Box sx={profilePictureWrapper}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Image
                  src={initialValues.imageUrl}
                  alt="loader"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
              </Box>

              <Box sx={{ position: "absolute", bottom: "15px", right: "7px" }}>
                <DefaultButton
                  size="small"
                  variant="contained"
                  sx={btnWrapper}
                  onClick={handleEditClick}
                >
                  Edit
                </DefaultButton>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6} md={4}>
              <LabelCard title="Name">
                <Typography sx={textWrap}>{initialValues.name}</Typography>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LabelCard title="Occupation">
                <Typography sx={textWrap}>
                  {initialValues.occupation}
                </Typography>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LabelCard title="School">
                <Typography sx={textWrap}>{initialValues.school}</Typography>
              </LabelCard>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4}>
              <LabelCard title="Team Name">
                <Typography sx={textWrap}>{initialValues.teamName}</Typography>
              </LabelCard>
            </Grid>
          </Grid>
        </Stack>
        <Box mt={4}>
          <LabelCard title="Bio" showBtn handleonClick={handleEditClick}>
            <Box sx={{ height: "144px" }}>
              <Typography sx={textAreaWrap}>{initialValues.bio}</Typography>
            </Box>
          </LabelCard>
        </Box>
        <Box mt={6}>
          <LabelCard
            title="What I'm Looking For"
            showBtn
            handleonClick={handleEditClick}
          >
            <Box sx={{ height: "144px" }}>
              <Typography sx={textAreaWrap}>
                {initialValues.lookingFor}
              </Typography>
            </Box>
          </LabelCard>
        </Box>
      </Box>
    </Container>
  );
};
export default ScoutNormalMode;
