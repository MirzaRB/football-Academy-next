"use client";
import {
  Box,
  Container,
  Grid,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { databaseData } from "@/utils/database-data";
import { PlayerInfoCard } from "@/components";
import { useRouter } from "next/navigation";

const container: SxProps = {
  backgroundColor: "neutral.bgGrey",
  padding: { xs: "20px", sm: "40px", md: "60px" },
  borderTop: "13px solid #D9D9D9; ",
  mb: 4,
};
const headingWrapper: SxProps = {
  p: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #55565A",
  pb: 3,
};

const CoachFavouritesPage = () => {
  const route = useRouter();
  const isMatched = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const handleRoute = (id: string | number) => {
    route.push(`/coach/database/${id}`);
  };
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box sx={container}>
        <Box sx={headingWrapper}>
          <Typography
            sx={{ borderBottom: "5px solid #024F97" }}
            variant={isMatched ? "h4" : "h3"}
            fontWeight={500}
          >
            Favourites
          </Typography>
          <SortIcon sx={{ fontSize: { xs: "20px", sm: "30px", md: "40px" } }} />
        </Box>
        <Grid container spacing={2} mt={2}>
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
    </Container>
  );
};

export default CoachFavouritesPage;
