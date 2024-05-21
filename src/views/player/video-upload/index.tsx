"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  SxProps,
  Typography,
  Container,
  useMediaQuery,
  Theme,
  Stack,
  styled,
  Grid,
} from "@mui/material";
import {
  DefaultButton,
  LinearProgressBar,
  VideoBoxComponent,
} from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { setProfilePercentage } from "@/redux/slices/user-slice";
import { updateProfile } from "@/redux/slices/profile-slice";
import { AppDispatch } from "@/redux/store";

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
};

const flex: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const uploadWrapper: SxProps = {
  width: "100%",
  backgroundColor: "background.paper",
  border: "5px dashed #777",
  cursor: "pointer",
};
const uploadStackWrapper: SxProps = {
  color: "#777",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  py: { xs: "30px", sm: "50px", md: "60px" },
  px: "10px",
  gap: "10px",
};
const videoPreviewWrapper: SxProps = {
  width: "100%",
  backgroundColor: "background.paper",
  height: { xs: "200px", sm: "300px", md: "350px" },
  mt: "40px",
  border: "5px solid #777",
};

const nextButtonWrapper: SxProps = {
  backgroundColor: "background.paper",
  "&:hover": {
    color: "text.secondary",
  },
  borderRadius: "25px",
  padding: "10px 35px",
  color: "text.primary",
};

const VideoUploadPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { videos, featuredVideo } = useSelector(
    (state: RootState) => state.profile
  );
  const [featured, setFeatured] = useState(featuredVideo);
  const router = useRouter();
  const date = format(new Date(), "LLL,dd,yyyy");
  const [myVideoArray, setMyVideoArray] = useState<IVideo[] | []>([]);
  const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    const file = e.target.files?.[0];
    if (file) {
      let name = file.name.split(".")[0];
      var url = URL.createObjectURL(file);
      setMyVideoArray((prev: IVideo[]) => [...prev, { url, name }]);
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const { profilePercentage } = useSelector((state: RootState) => state.user);
  const handleBoxClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleNextButtonClick = () => {
    router.push("/player/dashboard");
    dispatch(setProfilePercentage(90));
    dispatch(updateProfile({ featuredVideo: featured, videos: myVideoArray }));
  };

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box sx={container}>
        <Box sx={flex} flexDirection={{ xs: "column", sm: "row" }}>
          <Typography variant={isMatched ? "h4" : "h3"} fontWeight={600}>
            Upload Video
          </Typography>
          <Box sx={{ width: { xs: "100%", sm: "350px", lg: "400px" } }}>
            <Box sx={flex} mb={1}>
              <Typography variant="body2">Complete Profile</Typography>
              <Typography variant="body2">2/3</Typography>
            </Box>
            <LinearProgressBar progress={profilePercentage} />
          </Box>
        </Box>
        <Box mt={6} sx={uploadWrapper} onClick={handleBoxClick}>
          <Stack sx={uploadStackWrapper}>
            <CloudUploadIcon
              fontSize="inherit"
              sx={{ fontSize: { xs: "50px", sm: "80px" } }}
            />
            <Typography variant="h5" textAlign="center">
              Select Video to Upload
            </Typography>
            <Typography variant="h6" textAlign="center">
              Or drag and drop to upload (230mb limit)
            </Typography>
          </Stack>
          <VisuallyHiddenInput
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            ref={inputRef}
            onChange={handleVideoChange}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mt: "45px" }}>
          <Typography variant="h4">Featured Video</Typography>
          <Typography variant="h6" sx={{ color: "#777" }}>
            This is the main video featured on your profile
          </Typography>
        </Box>
        <Box sx={videoPreviewWrapper}>
          <video
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={featured}
            controls={featured !== ""}
          />
        </Box>
        <Box mt={6}>
          <Grid container spacing={2} >
            {myVideoArray.map((videoSrc, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} >
                <VideoBoxComponent
                  videoSrc={videoSrc.url}
                  handleVideoClick={setFeatured}
                  featured={featured}
                  date={date}
                  key={index}
                  star={true}
                  title={videoSrc.name}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <DefaultButton
            variant="contained"
            type="submit"
            sx={nextButtonWrapper}
            onClick={handleNextButtonClick}
          >
            Finish
          </DefaultButton>
        </Box>
      </Box>
    </Container>
  );
};
export default VideoUploadPage;
