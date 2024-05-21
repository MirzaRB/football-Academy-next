"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  SxProps,
  Stack,
} from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Img, Slider } from "@/components";
import { bannerimages, products } from "@/utils/mocks";

const wrapper: SxProps = {
  width: { xs: "100%", md: "75%" },
  height: "100%",
  mx: "auto",
};
const layerWrapper: SxProps = {
  position: "absolute",
  backgroundColor: "rgba(85, 86, 90, 0.90)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0,
  right: 0,
  height: "100%",
  zIndex: 99,
};
const productBox: SxProps = {
  height: "300px",
  backgroundColor: "gray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const swiperBox: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const MerchandisePage = () => {
  return (
    <Box sx={{ p: { xs: 0, md: 6 }, position: "relative" }}>
      <Box sx={layerWrapper}>
        <Stack direction="column" alignItems="center" spacing={8}>
          <Typography variant="h1" color="white">
            Coming Soon
          </Typography>
          <Box sx={{ width: { xs: "200px", sm: "300px", md: "500px" } }}>
            <Img src="/images/footer-logo.png" alt="coming soon" />
          </Box>
        </Stack>
      </Box>
      <Box sx={wrapper}>
        <Slider childClassName="my-swiper">
          {bannerimages.map((img, index) => (
            <SwiperSlide key={index}>
              <Box sx={swiperBox}>
                <Image
                  width={720}
                  height={250}
                  src={img.imgurl}
                  alt={img.alt}
                  objectFit="contain"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
      <Container>
        <Box textAlign="center" p={8}>
          <Typography variant="h2">Merchendise</Typography>
        </Box>
        <Box>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 2, sm: 4, md: 6 }}
          >
            {products.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={productBox}>{item.name}</Box>
                <Typography variant="subtitle2">{item.subtitle}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default MerchandisePage;
