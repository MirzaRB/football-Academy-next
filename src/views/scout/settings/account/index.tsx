"use client";
import React from "react";
import { Box, Grid, MenuItem, Stack, SxProps, Typography } from "@mui/material";
import { DefaultButton, SelectInput, TextField } from "@/components";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  location: Yup.string(),
  school: Yup.string(),
  occupation: Yup.string(),
  id: Yup.string(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  location: "",
  school: "",
  occupation: "",
  id: "",
};

const ScoutAccount = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            <TextField
              variant="standard"
              sx={textFieldWrap}
              label="School"
              type="text"
              name="school"
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
              label="Occupation"
              type="text"
              name="occupation"
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

export default ScoutAccount;
