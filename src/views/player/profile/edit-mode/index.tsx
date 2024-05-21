"use client";
import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { setProfilePercentage } from "@/redux/slices/user-slice";
import {
  DefaultButton,
  ExerciseCard,
  Img,
  LabelCard,
  LinearProgressBar,
  SelectInput,
  TextField,
} from "@/components";
import {
  Container,
  Box,
  Button,
  Grid,
  MenuItem,
  Rating,
  Stack,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { heights, positions, weights } from "@/utils/dropdown-data";
import { AppDispatch } from "@/redux/store";
import { updateProfile } from "@/redux/slices/profile-slice";
import { exercises } from "@/utils/helpers";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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
  borderRadius: "15px",
  backgroundColor: "#839aac",
  color: "text.secondary",
  height: "30px",
  width: "100%",
  mb: 3,
  "&:hover": {
    background: "#839aac",
  },
};
const profilePictureWrapper: SxProps = {
  display: "flex",
  backgroundColor: "background.paper",
  height: "317px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const profileBox = (defaultImg: boolean | null | undefined): SxProps => {
  return {
    background: "none",
    outline: "none",
    cursor: "pointer",
    border: "none",
    display: "flex",
    flexDirection: "column",
    margin: defaultImg ? "15px" : "0px",
    height: defaultImg ? "auto" : "100% !important",
  };
};
const uploadBox = (defaultImg: boolean | null | undefined): SxProps => {
  return {
    height: defaultImg ? "auto" : "100% !important",
    img: {
      height: defaultImg ? "auto" : "100% !important",
    },
  };
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

const excersizeStackWrapper: SxProps = {
  display: "flex",
  flexDirection: "row",
  gap: { xs: "8px", sm: "20px", md: "15px", lg: "20px" },
  flexWrap: "wrap",
};
const requiredWrapper: SxProps = {
  fontSize: "12px",
  color: "red",
  display: "flex",
  justifyContent: "flex-end",
  mr: 1,
};

const EditMode = () => {
  const [isRequiredMessageVisible, setIsRequiredMessageVisible] =
    useState(false);
  const router = useRouter();
  const { profilePercentage } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const { initialValues } = useSelector((state: RootState) => state.profile);
  
  const [imageSrc, setImageSrc] = useState<string>(initialValues.imageUrl);
  const defaultImg = imageSrc === "/images/upload-img.png";
  const inputRef = useRef<any>();
  const [steps, setSteps] = useState({
    current: 1,
    total: 3,
  });
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [profileDetail, setProfileDetail] = useState<any>({
    ...initialValues,
  });
  const [rating, setRating] = useState(profileDetail.rating);

  const handleChangeInput = (type: string, e: any) => {
    setProfileDetail({
      ...profileDetail,
      [type]: e.target.value,
    });
  };

  const handleExerciseCardClick = (index: number) => {
    const updatedExercises = [...exercises];
    updatedExercises[index].selected = !updatedExercises[index].selected;
    const selectedExercises = updatedExercises
      .filter((exercise) => exercise.selected)
      .map((exercise) => exercise.text);

    handleChangeInput("exercises", { target: { value: selectedExercises } });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImageSrc(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    inputRef.current.click();
  };
  const handleNextButtonClick = () => {
    if (defaultImg) {
      window.scrollTo(0, 0);
      setIsRequiredMessageVisible(true);
      return;
    }
    router.push("/player/video-upload");
    dispatch(setProfilePercentage(66));
    dispatch(
      updateProfile({
        initialValues: { ...profileDetail, imageUrl: imageSrc, rating  },
        editMode: false,
      })
    );
  };

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
              <Box
                component="button"
                onClick={handleUploadButtonClick}
                sx={profileBox(defaultImg)}
              >
                <Box sx={uploadBox(defaultImg)}>
                  {defaultImg && (
                    <>
                      {isRequiredMessageVisible && (
                        <Typography sx={requiredWrapper}>*Required</Typography>
                      )}
                      <Button variant="contained" sx={btnWrapper}>
                        Upload file
                      </Button>
                    </>
                  )}

                  <Img src={imageSrc ?? defaultImg} alt="upload" />
                </Box>
              </Box>
            </Box>
            <Rating
              name="rating"
              value={rating}
              precision={0.5}
              sx={{ color: "red" }}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Stack>
          <VisuallyHiddenInput
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
          />
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6} md={5} lg={4}>
              <LabelCard title="Name">
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                  name="name"
                  size="small"
                  value={profileDetail.name}
                  onChange={(e) => handleChangeInput("name", e)}
                />
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <LabelCard title="Rank">
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                  name="rank"
                  size="small"
                  value={profileDetail.rank}
                  onChange={(e) => handleChangeInput("rank", e)}
                />
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <LabelCard title="Position">
                <SelectInput
                  name="position"
                  value={profileDetail.position}
                  onChange={(e) => {
                    handleChangeInput("position", e);
                  }}
                >
                  {positions.map((positions, index) => (
                    <MenuItem key={index} value={positions.value}>
                      {positions.label}
                    </MenuItem>
                  ))}
                </SelectInput>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <LabelCard title="Height">
                <SelectInput
                  name="height"
                  value={profileDetail.height}
                  onChange={(e) => handleChangeInput("height", e)}
                >
                  {heights.map((heights, index) => (
                    <MenuItem key={index} value={heights.value}>
                      {heights.label}
                    </MenuItem>
                  ))}
                </SelectInput>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <LabelCard title="Weight">
                <SelectInput
                  name="weight"
                  value={profileDetail.weight}
                  onChange={(e) => handleChangeInput("weight", e)}
                >
                  {weights.map((weights, index) => (
                    <MenuItem key={index} value={weights.value}>
                      {weights.label}
                    </MenuItem>
                  ))}
                </SelectInput>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <LabelCard title="Offence/Defence">
                <SelectInput
                  name="offDef"
                  value={profileDetail.offDef}
                  onChange={(e) => handleChangeInput("offDef", e)}
                >
                  <MenuItem value="offence">Offence</MenuItem>
                  <MenuItem value="defence">Defence</MenuItem>
                </SelectInput>
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <Stack sx={excersizeStackWrapper}>
                {exercises.map((item, index) => (
                  <Box key={index} mt={1}>
                    <ExerciseCard
                      icon={item.icon}
                      text={item.text}
                      selected={initialValues.exercises.includes(item.text)}
                      isSelectable={false}
                      onSelect={() => handleExerciseCardClick(index)}
                    />
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <Box mt={2}>
          <LabelCard title="Bio" >
            <TextField
              name="bio"
              value={profileDetail.bio}
              onChange={(e) => handleChangeInput("bio", e)}
              id="standard-multiline-static"
              multiline
              rows={5}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </LabelCard>
        </Box>
        <Box mt={6}>
          <LabelCard title="Education" >
            <TextField
              name="education"
              value={profileDetail.education}
              onChange={(e) => handleChangeInput("education", e)}
              id="standard-multiline-static"
              multiline
              rows={5}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
          </LabelCard>
        </Box>
        <Box mt={6}>
          <LabelCard title="Combine Stats" >
            <Grid container spacing={2} p={3}>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  name="fourtyYard"
                  label="40 Yard Dash:"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  typoVariant="body2"
                  labelsx={{ color: "#024F97" }}
                  value={profileDetail.fourtyYard}
                  onChange={(e) => handleChangeInput("fourtyYard", e)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  name="twentyYard"
                  label="20 Yard Dash:"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  typoVariant="body2"
                  labelsx={{ color: "#024F97" }}
                  value={profileDetail.twentyYard}
                  onChange={(e) => handleChangeInput("twentyYard", e)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  name="verticalJump"
                  label="Vertical Jump:"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  typoVariant="body2"
                  labelsx={{ color: "#024F97" }}
                  value={profileDetail.verticalJump}
                  onChange={(e) => handleChangeInput("verticalJump", e)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  name="broadJump"
                  label="Broad Jump:"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  typoVariant="body2"
                  labelsx={{ color: "#024F97" }}
                  value={profileDetail.broadJump}
                  onChange={(e) => handleChangeInput("broadJump", e)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  name="threeCone"
                  label="3-Cone Drill:"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  typoVariant="body2"
                  labelsx={{ color: "#024F97" }}
                  value={profileDetail.threeCone}
                  onChange={(e) => handleChangeInput("threeCone", e)}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  name="bench"
                  label="Bench 225lbs:"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  typoVariant="body2"
                  labelsx={{ color: "#024F97" }}
                  value={profileDetail.bench}
                  onChange={(e) => handleChangeInput("bench", e)}
                />
              </Grid>
            </Grid>
          </LabelCard>
        </Box>
        <Box mt={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <DefaultButton
            variant="contained"
            type="submit"
            sx={nextButtonWrapper}
            onClick={handleNextButtonClick}
          >
            Next Step: Upload Videos
          </DefaultButton>
        </Box>
      </Box>
    </Container>
  );
};

export default EditMode;
