"use client";
import React from "react";
import { Box, SxProps, Typography, Grid } from "@mui/material";
import { DefaultButton, TextField } from "@/components";
import { useFormik } from "formik";
import * as Yup from "yup";

const textFieldWrap: SxProps = {
  ".MuiInputBase-root ": {
    backgroundColor: "white",
    padding: "4px 10px 3px",
    borderRadius: "3px",
  },
};

const validationSchema = Yup.object({
  currentPassword: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  newPassword: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  passwordConfirmation: Yup.string()
    .required("Please re-type your password")
    .oneOf([Yup.ref("newPassword")], "Passwords does not match"),
});

const ScoutPassword = () => {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    passwordConfirmation: "",
  };

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
        <Typography variant="h5" textAlign="center" p={2} my={4}>
          Change Password
        </Typography>
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
              label="Current Password"
              type="password"
              name="currentPassword"
              typoVariant="body2"
              formik={formik}
            />
          </Grid>
          <Grid item xs={0} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              sx={textFieldWrap}
              InputProps={{
                disableUnderline: true,
              }}
              label="New Password"
              type="password"
              name="newPassword"
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
              label="Confirm Password"
              type="password"
              name="passwordConfirmation"
              typoVariant="body2"
              formik={formik}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", padding: "10px" }}
          >
            <DefaultButton
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "error.main",
                borderRadius: "25px",
                padding: "10px 35px",
                color: "text.secondary",
                margin: "30px 0px",
              }}
            >
              Save Changes
            </DefaultButton>
          </Grid>
        </Grid>
      </form>
      <Box textAlign="center">
        <Typography variant="overline" >
          You will be asked to log in again with your new password after you
          save your changes.
        </Typography>
      </Box>
    </>
  );
};

export default ScoutPassword;
