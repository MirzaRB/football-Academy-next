"use client";
import React, { useState, ChangeEvent, useRef} from "react";
import { RootState } from "@/redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  DefaultButton,
  Img,
  LabelCard,
  TextField,
} from "@/components";
import {
  Container,
  Box,
  Button,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { AppDispatch } from "@/redux/store";
import { updateProfile } from "@/redux/slices/scout-slice";
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

const requiredWrapper: SxProps = {
  fontSize: "12px",
  color: "red",
  display: "flex",
  justifyContent: "flex-end",
  mr: 1,
};

const ScoutEditMode = () => {
  const [isRequiredMessageVisible, setIsRequiredMessageVisible] =
    useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { initialValues } = useSelector((state: RootState) => state.scout);
  const [imageSrc, setImageSrc] = useState<string>(initialValues.imageUrl);
  const defaultImg = imageSrc === "/images/upload-img.png";
  const inputRef = useRef<any>();
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [profileDetail, setProfileDetail] = useState<any>({
    ...initialValues,
  });

  const handleChangeInput = (type: string, e: any) => {
    setProfileDetail({
      ...profileDetail,
      [type]: e.target.value,
    });
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
    dispatch(
      updateProfile({
        initialValues: { ...profileDetail, imageUrl: imageSrc},
        editMode: false,
      })
    );
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
          </Box>
          <VisuallyHiddenInput
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
          />
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6} md={4} >
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
            <Grid item xs={12} sm={6} md={4} >
              <LabelCard title="Occupation">
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                  name="occupation"
                  size="small"
                  value={profileDetail.occupation}
                  onChange={(e) => handleChangeInput("occupation", e)}
                />
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LabelCard title="School">
              <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                  name="school"
                  size="small"
                  value={profileDetail.school}
                  onChange={(e) => handleChangeInput("school", e)}
                />
              </LabelCard>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <LabelCard title="Team Name">
              <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                  name="teamName"
                  size="small"
                  value={profileDetail.teamName}
                  onChange={(e) => handleChangeInput("teamName", e)}
                />
              </LabelCard>
            </Grid>
          </Grid>
        </Stack>
        <Box mt={2}>
          <LabelCard title="Bio">
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
          <LabelCard title="What I'm Looking For" >
            <TextField
              name="lookingFor"
              value={profileDetail.lookingFor}
              onChange={(e) => handleChangeInput("lookingFor", e)}
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
        
        <Box mt={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <DefaultButton
            variant="contained"
            type="submit"
            sx={nextButtonWrapper}
            onClick={handleNextButtonClick}
          >
            Save Details
          </DefaultButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ScoutEditMode;
