"use client";
import React, { useEffect, useState } from "react";
import {
  DefaultButton,
  ExerciseCard,
  LabelCard,
  PlayerInfoCard,
} from "@/components";
import VideoPlayer from "@/components/video-player";
import { databaseData } from "@/utils/database-data";
import { exercises } from "@/utils/helpers";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Container,
  Grid,
  Rating,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";

const container: SxProps = {
  backgroundColor: "#E5E5E5",
  mb: 4,
};
const subContainer: SxProps = {
  borderTop: "13px solid #D9D9D9; ",
  padding: { xs: "20px", sm: "40px", md: "60px" },
};

const buttonsWrap: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const brownBtn: SxProps = {
  width: { xs: "125px", sm: "160px", md: "180px" },
  height: { xs: "30px", sm: "35px", md: "40px" },
  borderRadius: "0px",
  backgroundColor: "#333333",
  color: "text.secondary",
  "&:hover": {
    backgroundColor: "#333333",
    color: "white",
  },
  whiteSpace: "nowrap",
};
const blueBtn: SxProps = {
  width: { xs: "125px", sm: "160px", md: "180px" },
  height: { xs: "30px", sm: "35px", md: "40px" },
  borderRadius: "0px",
  backgroundColor: "#024F97",
  color: "text.secondary",
  "&:hover": {
    backgroundColor: "#024F97",
  },
  whiteSpace: "nowrap",
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
  fontSize: "17px",
  fontWeight: "400",
  whiteSpace: "nowrap",
  height: "32px",
};

const excersizeStackWrapper: SxProps = {
  display: "flex",
  flexDirection: "row",
  gap: { xs: "8px", sm: "20px", md: "15px", lg: "20px" },
  flexWrap: "wrap",
};

const textAreaWrap: SxProps = {
  fontSize: { xs: "15", md: "19px" },
  fontWeight: "400",
  py: "2px",
};
const coachNotesWrap: SxProps = {
  fontSize: { xs: "15", md: "19px" },
  fontWeight: "400",
  py: { xs: 1, md: 2 },
};

const videoPreviewWrapper: SxProps = {
  width: "100%",
  backgroundColor: "background.paper",
  height: { xs: "300px", sm: "400px", md: "450px" },
  mt: "20px",
  border: "1px solid #777",
  position: "relative",
};

const emptyWrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const videolayerWrapper: SxProps = {
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
};

const ScoutProfileDetail = () => {
  const route = useRouter();
  const [profile, setProfile] = useState<IProfile>(databaseData[0]);
  const [favourite, setFavourite] = useState<Boolean>(false);
  const [selectedEx, setSelectedEx] = useState<IExcersize[]>([]);
  const params = useParams();
  const profileId = params.id;
  const [featured, setFeatured] = useState("");
  const updateFeaturedVideo = (newSource: string) => {
    setFeatured(newSource);
  };
  useEffect(() => {
    if (profileId) {
      const profileData = databaseData.find((item) => item.id === profileId);
      if (profileData) {
        const selectedExercises = exercises.map((item) => ({
          ...item,
          selected: profileData.exercises.some(
            (initialItem) => initialItem === item.text
          ),
        }));
        setSelectedEx(selectedExercises);
        setProfile(profileData);
        setFeatured(profileData.featuredVideo);
      }
    }
  }, [profileId]);

  const handleRoute = (id: string | number) => {
    route.push(`/scout/database/${id}`);
  };
  const handleFavClick = () =>{
    setFavourite(!favourite)
  }

  const combineStatsData = [
    {
      label: "40 Yard Dash:",
      value: profile.fourtyYard,
    },
    {
      label: "20 Yard Dash:",
      value: profile.twentyYard,
    },
    {
      label: "Vertical Jump:",
      value: profile.verticalJump,
    },
    {
      label: "Broad Jump:",
      value: profile.broadJump,
    },
    {
      label: "3-Cone Drill:",
      value: profile.threeCone,
    },
    {
      label: "Bench 225lbs:",
      value: profile.bench,
    },
  ];

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box sx={container}>
        <Box sx={subContainer}>
          <Box sx={buttonsWrap}>
            <DefaultButton
              variant="contained"
              sx={brownBtn}
              href="/scout/database"
            >
              Back to Search
            </DefaultButton>
            <DefaultButton variant="contained" sx={blueBtn}>
              Get in Touch
            </DefaultButton>
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
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Image
                    src={profile.image as string}
                    alt="loader"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  />
                </Box>
                <Box sx={{ position: "absolute", top: "20px", right: "7px" }} onClick={handleFavClick}>
                  <StarIcon
                    fontSize="inherit"
                    sx={{
                      color: favourite ? "gold" : "white",
                      fontSize: "60px",
                    }}
                    
                  />
                </Box>
              </Box>
              <Rating
                name="rating"
                defaultValue={profile?.rating || 0}
                value={profile?.rating || 0}
                precision={0.5}
                readOnly
                sx={{ color: "red" }}
              />
            </Stack>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={6} md={5} lg={4}>
                <LabelCard title="Name">
                  <Typography sx={textWrap}>{profile.name}</Typography>
                </LabelCard>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <LabelCard title="Rank">
                  <Typography sx={textWrap}>{profile.rank}</Typography>
                </LabelCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <LabelCard title="Position">
                  <Typography sx={textWrap}>{profile.position}</Typography>
                </LabelCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <LabelCard title="Height">
                  <Typography sx={textWrap}>{profile.height}</Typography>
                </LabelCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <LabelCard title="Weight">
                  <Typography sx={textWrap}>{profile.weight}</Typography>
                </LabelCard>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <LabelCard title="Offence/Defence">
                  <Typography sx={textWrap}>{profile.offDef}</Typography>
                </LabelCard>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={8}>
                <Stack sx={excersizeStackWrapper}>
                  {selectedEx.map((item, index) => (
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
          <Box mt={3}>
            <LabelCard title="Coach Notes">
              <Box sx={{ height: "80px" }}>
                <Typography sx={coachNotesWrap}>
                  {profile.coachNotes}
                </Typography>
              </Box>
            </LabelCard>
          </Box>
          <Box mt={4}>
            <LabelCard title="Bio">
              <Box sx={{ height: "144px" }}>
                <Typography sx={textAreaWrap}>{profile.bio}</Typography>
              </Box>
            </LabelCard>
          </Box>
          <Box mt={6}>
            <LabelCard title="Combine Stats">
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
          <Box sx={videoPreviewWrapper}>
            {featured === "" ? (
              <Box sx={emptyWrapper}>
                <Typography variant="h5">No Video Available</Typography>
              </Box>
            ) : (
              <VideoPlayer videoSource={featured} />
            )}
          </Box>
          <Grid container spacing={1} mt={3}>
            {profile.videos?.map((source, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Box
                  sx={{ position: "relative", width: "100%", height: "100%" }}
                  onClick={() => updateFeaturedVideo(source)}
                >
                  <video
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={source}
                  />
                  <Box sx={videolayerWrapper}>
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
        <Box
          px={{ xs: 3, sm: 4, md: 6 }}
          py={{ xs: 4, sm: 5, md: 6 }}
          mt={{ xs: 1, sm: 3, md: 4 }}
          sx={{ borderRadius: "20px", backgroundColor: "#979797" }}
        >
          <Typography
            variant="h4"
            fontWeight={500}
            sx={{ color: "text.secondary" }}
          >
            Similar Player Stats
          </Typography>
          <Grid container mt={2} spacing={2}>
            {databaseData.slice(0, 3).map((player, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{ height: "100%" }}
              >
                <PlayerInfoCard
                  name={player.name}
                  stats={player.stats}
                  imageSrc={player.image}
                  id={player.id}
                  handleRoute={handleRoute}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ScoutProfileDetail;
