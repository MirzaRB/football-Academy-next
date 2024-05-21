"use client";
import {
  DefaultButton,
  ExerciseCard,
  LabelCard,
  SelectInput,
} from "@/components";
import { positionsShorts, time, weights } from "@/utils/dropdown-data";
import { exercises } from "@/utils/helpers";
import {
  Box,
  Container,
  MenuItem,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

const container: SxProps = {
  backgroundColor: "neutral.bgGrey",
  padding: { xs: "20px", sm: "40px", md: "60px" },
  borderTop: "13px solid #D9D9D9; ",
  mb: 4,
};
const headingWrapper: SxProps = {
  p: 1,
  display: "flex",
  alignItems: "flex-start",
  borderBottom: "1px solid #55565A",
  pb: 3,
};
const excersizeStackWrapper: SxProps = {
  p: 1,
  mt: 2,
  display: "flex",
  borderRadius: "5px",
  flexDirection: "row",
  gap: "8px",
  flexWrap: "wrap",
};
const positionStackWrapper: SxProps = {
  p: 1,
  mt: 2,
  display: "flex",
  borderRadius: "8px",
  flexDirection: "row",
  backgroundColor: "#E5E5E5",
  gap: "8px",
  flexWrap: "wrap",
};

const selectInputBoxWrapper: SxProps = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "25px",
  py: 2,
};

const selectInputWrap: SxProps = {
  borderRadius: "5px",
  py: { xs: 0, sm: 1 },
  px: 1,
  backgroundColor: "#EBEBEB",
  ".MuiSvgIcon-root": {
    color: "black",
    fontSize: { xs: "30px", sm: "35px", md: "45px" },
  },
};

const detailBox: SxProps = {
  display: "flex",
  gap: "20px",
  flexDirection: { xs: "column", md: "row" },
};

const buttonBoxWrap: SxProps = {
  display: "flex",
  justifyContent: "end",
  padding: "15px",
};

const buttonWrap: SxProps = {
  borderRadius: "50px",
  backgroundColor: "background.paper",
  color: "text.primary",
  border: "2px solid #024F97",
  "&:hover": {
    color: "text.secondary",
    backgroundColor: "#024F97",
  },
  width: { xs: "90px", sm: "110px", md: "130px" },
  height: { xs: "30px", sm: "35px", md: "40px" },
};

const ScoutAlertsPage = () => {
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [selectedPositions, setSelectedPositions] = useState<
    { index: number; value: string }[]
  >([]);

  const handleBoxClick = (index: number, value: string) => {
    const positionIndex = selectedPositions.findIndex(
      (pos) => pos.index === index
    );

    if (positionIndex !== -1) {
      const updatedSelectedPositions = [...selectedPositions];
      updatedSelectedPositions.splice(positionIndex, 1);
      setSelectedPositions(updatedSelectedPositions);
    } else {
      setSelectedPositions([...selectedPositions, { index, value }]);
    }
  };

  const handleExerciseCardClick = (index: number) => {
    const updatedExercises = [...exercises];
    updatedExercises[index].selected = !updatedExercises[index].selected;
    const selectedExercises = updatedExercises
      .filter((exercise) => exercise.selected)
      .map((exercise) => exercise.text);
  };
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box sx={container}>
        <Box sx={headingWrapper}>
          <Typography
            sx={{ borderBottom: "5px solid black" }}
            variant={isMatched ? "h4" : "h3"}
            fontWeight={500}
          >
            Alerts
          </Typography>
        </Box>
        <Box mt={4}>
          <LabelCard
            titleSx={{ fontSize: { xs: "18px", sm: "22px", md: "26px" } }}
            title="CHOOSE WHAT ALERTS YOU WOULD LIKE TO RECIEVE"
          >
            <Box py={4}>
              <Box sx={detailBox}>
                <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Events
                  </Typography>
                  <Box sx={excersizeStackWrapper}>
                    {exercises.map((item, index) => (
                      <Box key={index}>
                        <ExerciseCard
                          icon={item.icon}
                          text={item.text}
                          selected={false}
                          isSelectable={true}
                          onSelect={() => handleExerciseCardClick(index)}
                        />
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="subtitle2" mt={3} fontWeight="bold">
                    Position
                  </Typography>
                  <Box sx={positionStackWrapper}>
                    {positionsShorts.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          borderRadius: "10px",
                          width: { xs: "40px", sm: "55px", md: "75px" },
                          height: { xs: "40px", sm: "55px", md: "75px" },

                          backgroundColor: selectedPositions.some(
                            (pos) => pos.index === index
                          )
                            ? "#AABBCB"
                            : "background.paper",
                          transition: "all 0.8s ease",
                          cursor: "pointer",
                        }}
                        onClick={() => handleBoxClick(index, item.label)}
                      >
                        <Typography
                          sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: selectedPositions.some(
                              (pos) => pos.index === index
                            )
                              ? "text.secondary"
                              : "text.primary",
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={selectInputBoxWrapper}>
                  <Box sx={{ width: "100%" }}>
                    <SelectInput
                      name="Time"
                      label="Time"
                      labelsx={{ fontWeight: "bold" }}
                      sx={selectInputWrap}
                    >
                      {time.map((time, index) => (
                        <MenuItem key={index} value={time.value}>
                          {time.label}
                        </MenuItem>
                      ))}
                    </SelectInput>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <SelectInput
                      name="Distance"
                      label="Distance"
                      labelsx={{ fontWeight: "bold" }}
                      sx={selectInputWrap}
                    >
                      <MenuItem value={"5KM"}>5 KM</MenuItem>
                      <MenuItem value={"10KM"}>10 KM</MenuItem>
                    </SelectInput>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <SelectInput
                      name="Weight"
                      label="Weight"
                      labelsx={{ fontWeight: "bold" }}
                      sx={selectInputWrap}
                    >
                      {weights.map((weight, index) => (
                        <MenuItem key={index} value={weight.value}>
                          {weight.label}
                        </MenuItem>
                      ))}
                    </SelectInput>
                  </Box>
                </Box>
              </Box>
              <Box sx={buttonBoxWrap}>
                <DefaultButton variant="contained" sx={buttonWrap}>
                  Save
                </DefaultButton>
              </Box>
            </Box>
          </LabelCard>
        </Box>
      </Box>
    </Container>
  );
};

export default ScoutAlertsPage;
