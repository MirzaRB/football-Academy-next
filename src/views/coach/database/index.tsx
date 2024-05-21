"use client";
import React, { useEffect, useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import {
  Container,
  Box,
  SxProps,
  Grid,
  Pagination,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  ChipButton,
  DefaultButton,
  ExerciseCard,
  PlayerInfoCard,
  SelectInput,
} from "@/components";
import { databaseData } from "@/utils/database-data";
import { exercises } from "@/utils/helpers";
import { Theme } from "@emotion/react";
import { positionsShorts, time, weights } from "@/utils/dropdown-data";
import { useRouter } from "next/navigation";

const container: SxProps = {
  backgroundColor: "#E5E5E5",
  padding: { xs: "20px", sm: "40px", md: "60px" },
  mb: 4,
};
const accordianHeading: SxProps = {
  "&.Mui-expanded": {
    backgroundColor: "#f0f0f0",
  },
};
const accordianDetailBox: SxProps = {
  display: "flex",
  gap: "20px",
  flexDirection: { xs: "column", md: "row" },
};

const excersizeStackWrapper: SxProps = {
  p: 1,
  mt: 2,
  display: "flex",
  borderRadius: "5px",
  flexDirection: "row",
  backgroundColor: "#E5E5E5",
  gap: "8px",
  flexWrap: "wrap",
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
const buttonBoxWrap: SxProps = {
  display: "flex",
  justifyContent: "end",
  padding: "15px",
};
const selectInputBoxWrapper: SxProps = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "25px",
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

const CoachDatabasePage = () => {
  const route = useRouter();
  const [accordionOpen, setAccordionOpen] = useState(false);
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [selectedPositions, setSelectedPositions] = useState<
    { index: number; value: string }[]
  >([]);
  const [paginationState, setPaginationState] = useState({
    currentPage: 1,
    pageSize: 1,
    total: Math.ceil(databaseData.length / 2),
  });

  const handlePaginationChange = (_: any, newPage: number) => {
    setPaginationState({
      ...paginationState,
      currentPage: newPage,
    });
  };
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
  const handleAccordionToggle = () => {
    setAccordionOpen((prevState) => !prevState);
  };

  const handleSaveButtonClick = () => {
    setAccordionOpen(false);
  };

  const handleRoute = (id: string | number) => {
    route.push(`/coach/database/${id}`);
  };
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box sx={container}>
        <Box>
          <Box mb={4}>
            <Accordion
              sx={accordianHeading}
              expanded={accordionOpen}
              onChange={handleAccordionToggle}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon fontSize="large" sx={{ color: "black" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant={isMatched ? "h6" : "h5"} fontWeight="400">
                  FILTER YOUR SEARCH
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: "background.paper", p: 2 }}
              >
                <Box sx={accordianDetailBox}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", flex: 1 }}
                  >
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
                    <Box sx={excersizeStackWrapper}>
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
                  <DefaultButton
                    variant="contained"
                    sx={buttonWrap}
                    onClick={handleSaveButtonClick}
                  >
                    Search
                  </DefaultButton>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box p={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              mb={2}
            >
              <Typography variant={isMatched ? "h4" : "h3"} fontWeight={500}>
                Results
              </Typography>
              <SortIcon
                sx={{ fontSize: { xs: "20px", sm: "30px", md: "40px" } }}
              />
            </Box>
            <Grid container spacing={2}>
              {databaseData.map((player, index) => (
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
          <Box mt={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={paginationState.total}
              onChange={handlePaginationChange}
              page={paginationState.currentPage}
              hidePrevButton
              hideNextButton
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CoachDatabasePage;
