"use client";
import React, { useState, useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { RootState } from "@/redux/reducers";
import { useSelector, useDispatch } from "react-redux";

import {
  DefaultButton,
  ExerciseCard,
  Img,
  LabelCard,
  LinearProgressBar,
} from "@/components";
import {
  Container,
  Box,
  Grid,
  Rating,
  Stack,
  SxProps,
  Theme,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { AppDispatch } from "@/redux/store";
import VideoPlayer from "@/components/video-player";
import { __String } from "typescript";
import { updateProfile } from "@/redux/slices/profile-slice";
import { exercises } from "@/utils/helpers";
import Image from "next/image";

const container: SxProps = {
  backgroundColor: "neutral.bgGrey",
  padding: { xs: "20px", sm: "40px", md: "60px" },
  mb: 4,
};

const flex: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
  pt:'3px',
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

const videoPreviewWrapper: SxProps = {
  width: "100%",
  backgroundColor: "background.paper",
  height: { xs: "300px", sm: "400px", md: "450px" },
  mt: "20px",
  border: "1px solid #777",
  position: "relative",
};
const excersizeStackWrapper: SxProps = {
  display: "flex",
  flexDirection: "row",
  gap: { xs: "8px", sm: "20px", md: "15px", lg: "20px" },
  flexWrap: "wrap",
};
const nextButtonWrapper: SxProps = {
  backgroundColor: "background.paper",
  "&:hover": {
    color: "text.secondary",
  },
  borderRadius: "25px",
  padding: "10px 25px",
  color: "text.primary",
  margin: "30px 0px",
};

const uploadStackWrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  gap: "10px",
};



const NormalMode = () => {
  const { initialValues, featuredVideo, videos } = useSelector(
    (state: RootState) => state.profile
  );
  const [featured, setFeatured] = useState(featuredVideo);
  const updateFeaturedVideo = (newSource: string) => {
    setFeatured(newSource);
  };

  const { profilePercentage } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [steps, setSteps] = useState({
    current: 1,
    total: 3,
  });
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const selectedExercises = exercises.map((item) => ({
    ...item,
    selected: initialValues.exercises.some(
      (initialItem) => initialItem === item.text
    ),
  }));
  const handleEditClick = () => {
    dispatch(updateProfile({ editMode: true }));
  };

  const combineStatsData = [
    {
      label: "40 Yard Dash:",
      value: initialValues.fourtyYard,
    },
    {
      label: "20 Yard Dash:",
      value: initialValues.twentyYard,
    },
    {
      label: "Vertical Jump:",
      value: initialValues.verticalJump,
    },
    {
      label: "Broad Jump:",
      value: initialValues.broadJump,
    },
    {
      label: "3-Cone Drill:",
      value: initialValues.threeCone,
    },
    {
      label: "Bench 225lbs:",
      value: initialValues.bench,
    },
  ];

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box sx={container}>
        <Box sx={flex} flexDirection={{ xs: "column", sm: "row" }}>
          <Typography variant={isMatched ? "h4" : "h3"} fontWeight={500}>
            Your Profile
          </Typography>
          <Box sx={{ width: { xs: "100%", sm: "350px", lg: "400px" } }}>
            <Box sx={flex} mb={1}>
              <Typography variant="body2">Complete Profile</Typography>
              <Typography variant="body2">
                {steps.current}/{steps.total}
              </Typography>
            </Box>
            <LinearProgressBar progress={profilePercentage} />
          </Box>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={1}
          my={5}
        >
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            width="267px"
          >
            <Box sx={profilePictureWrapper}>
            <Box sx={{width:'100%',height:'100%'}}>
                  <Image
                    src={initialValues.imageUrl}
                    alt="loader"
                    width={0}
                    height={0}
                    style={{ width :'100%',height:'100%',objectFit:'fill'}}
                  />
                </Box>
              
              <Box sx={{ position: "absolute", top: "90px", right: "7px" }}>
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
            <Rating
              name="rating"
              value={initialValues.rating}
              precision={0.5}
              readOnly
              sx={{ color: "red" }}
            />
          </Stack>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <LabelCard title="Name">
                <Typography sx={textWrap}>{initialValues.name}</Typography>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <LabelCard title="Rank">
                <Typography sx={textWrap}>{initialValues.rank}</Typography>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <LabelCard title="Position">
                <Typography sx={textWrap}>{initialValues.position}</Typography>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <LabelCard title="Height">
                <Typography sx={textWrap}>{initialValues.height}</Typography>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <LabelCard title="Weight">
                <Typography sx={textWrap}>{initialValues.weight}</Typography>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <LabelCard title="Offence/Defence">
                <Typography sx={textWrap}>{initialValues.offDef}</Typography>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <Stack sx={excersizeStackWrapper}>
                {selectedExercises.map((item, index) => (
                  <Box key={index} mt={1}>
                    <ExerciseCard
                      icon={item.icon}
                      text={item.text}
                      selected={item.selected}
                      isSelectable={false}
                      onSelect={() => {}}
                    />
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <Box mt={2}>
          <LabelCard title="Bio" showBtn handleonClick={handleEditClick}>
            <Box sx={{ height: "144px" }}>
              <Typography sx={textAreaWrap}>{initialValues.bio}</Typography>
            </Box>
          </LabelCard>
        </Box>
        <Box mt={6}>
          <LabelCard
            title="Combine Stats"
            showBtn
            handleonClick={handleEditClick}
          >
            <Grid container spacing={2} p={3}>
              {combineStatsData.map((item, index) => (
                <Grid item xs={12} sm={6} md={2} key={index}>
                  <Box textAlign="center">
                    <Typography
                      variant="body2"
                      sx={{ color: "#024F97", fontWeight: "600" }}
                    >
                      {item.label}
                    </Typography>
                    <Typography variant="body2" fontWeight="600">
                      {item.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </LabelCard>
        </Box>
        <Box mt={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <DefaultButton
            variant="contained"
            sx={nextButtonWrapper}
            href="/player/video-upload"
          >
            Edit Videos
          </DefaultButton>
        </Box>

        <Box sx={videoPreviewWrapper}>
          {featured === "" ? (
            <Stack sx={uploadStackWrapper}>
              <Link
                href="/player/video-upload"
                underline="none"
                sx={{
                  color: "grey",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CloudUploadIcon
                  fontSize="inherit"
                  sx={{ fontSize: { xs: "50px", sm: "80px" } }}
                />
                <Typography variant="h5">Upload Video</Typography>
              </Link>
            </Stack>
          ) : (
            <VideoPlayer videoSource={featured} />
          )}
        </Box>
        <Grid container spacing={1} mt={3}>
          {videos?.map((source, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <Box
                sx={{ position: "relative", width: "100%", height: "100%" }}
                onClick={() => updateFeaturedVideo(source.url)}
              >
                <video
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={source.url}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: "50px",
                      color: "#D5D5D5",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default NormalMode;
