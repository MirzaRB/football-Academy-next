
"use client";
import React from "react";
import { Box, Grid, MenuItem, Stack, SxProps, Typography } from "@mui/material";
import { DefaultButton, SelectInput, TextField } from "@/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { heightsFeet, heightsInches, weights } from "@/utils/dropdown-data";

const textFieldWrap: SxProps = {
  ".MuiInputBase-root ": {
    backgroundColor: "white",
    padding: "4px 10px 3px",
    borderRadius: "3px",
  },
};
const buttonWrap: SxProps = {
  backgroundColor: "error.main",
  borderRadius: "25px",
  padding: "10px 35px",
  color: "text.secondary",
  margin: "30px 0px",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  month: Yup.number().typeError("Provide a number"),
  day: Yup.number().typeError("Provide a number"),
  year: Yup.number().typeError("Provide a number"),
  location: Yup.string(),
  gender: Yup.string(),
  feet: Yup.number(),
  inches: Yup.number(),
  weight: Yup.string(),
  id: Yup.string(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  month: "",
  day: "",
  year: "",
  location: "",
  gender: "",
  feet: "",
  inches: "",
  weight: "",
  id: "",
};
const Account = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );
  return (
    <>
      <Box>
        <Typography variant="h5" textAlign="center" p={2}>
          Account Details
        </Typography>
        <Typography variant="caption">*Required Fields</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              sx={textFieldWrap}
              InputProps={{
                disableUnderline: true,
              }}
              label="First Name"
              type="text"
              name="firstName"
              typoVariant="body2"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              sx={textFieldWrap}
              label="Last Name"
              type="text"
              name="lastName"
              InputProps={{
                disableUnderline: true,
              }}
              typoVariant="body2"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              sx={textFieldWrap}
              InputProps={{
                disableUnderline: true,
              }}
              label="Username*"
              type="text"
              name="username"
              typoVariant="body2"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              sx={textFieldWrap}
              label="Email*"
              type="email"
              name="email"
              InputProps={{
                disableUnderline: true,
              }}
              typoVariant="body2"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body2" gutterBottom>
              Birthday
            </Typography>
            <Stack direction="row" spacing={2}>
              <SelectInput name="month" formik={formik}>
                {months.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </SelectInput>
              <SelectInput name="day" formik={formik}>
                {days.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </SelectInput>
              <SelectInput name="year" formik={formik}>
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </SelectInput>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              variant="standard"
              sx={textFieldWrap}
              label="Location"
              type="text"
              name="location"
              InputProps={{
                disableUnderline: true,
              }}
              typoVariant="body2"
              formik={formik}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Gender
            </Typography>
            <SelectInput name="gender" formik={formik}>
              <MenuItem value="male">MALE</MenuItem>
              <MenuItem value="Female">FEMALE</MenuItem>
            </SelectInput>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Height
            </Typography>
            <Stack direction="row" spacing={2}>
              <SelectInput name="feet" formik={formik}>
                {heightsFeet.map((feet, index) => (
                  <MenuItem key={index} value={feet.value}>
                    {feet.label}
                  </MenuItem>
                ))}
              </SelectInput>
              <SelectInput name="inches" formik={formik}>
                {heightsInches.map((inches, index) => (
                  <MenuItem key={index} value={inches.value}>
                    {inches.label}
                  </MenuItem>
                ))}
              </SelectInput>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" gutterBottom>
              Weight
            </Typography>
            <Stack direction="row" spacing={2}>
              <SelectInput name="weight" formik={formik}>
                {weights.map((weight, index) => (
                  <MenuItem key={index} value={weight.value}>
                    {weight.label}
                  </MenuItem>
                ))}
              </SelectInput>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              sx={textFieldWrap}
              label="UserID"
              type="text"
              name="id"
              placeholder="e7fbe9883d6746458a6facfd70fdf09d"
              InputProps={{
                disableUnderline: true,
              }}
              typoVariant="body2"
              formik={formik}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", padding: "10px" }}
          >
            <DefaultButton variant="contained" type="submit" sx={buttonWrap}>
              Save Changes
            </DefaultButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Account;

