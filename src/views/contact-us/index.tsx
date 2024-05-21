"use client";
import {
  Box,
  FormGroup,
  FormHelperText,
  Grid,
  Typography,
  FormControl,
  SxProps,
} from "@mui/material";
import {
  TextField,
  Checkbox,
  DefaultButton,
  Container,
  Img,
} from "@/components";
import { useFormik } from "formik";
import { validationSchema } from "./schema";

const checkboxitems = [
  { label: "General Enquiry" },
  { label: "Trails" },
  { label: "Complaints" },
  { label: "Feedback" },
];

const imageStyle: SxProps = {
  display: { md: "block", xs: "none" },
};

const containerWrapper: SxProps = {
  backgroundColor: "background.paper",
  padding: "40px",
  boxShadow: 14,
  borderRadius: "10px",
};

const gridBtnWrapper: SxProps = {
  display: "flex",
  justifyContent: { xs: "center", sm: "flex-end" },
};

const btnWrapper: SxProps = {
  borderRadius: "5px",
  padding: { xs: "9px 28px", sm: "15px 48px" },
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: [],
  message: "",
};

const ContactUsPage = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box component="div" sx={{ m: { xs: 2, sm: 8 } }}>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ mt: 4, mb: { xs: 5, sm: 10 } }}
      >
        Contact Us
      </Typography>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={containerWrapper}
        >
          <Grid item xs={6} sx={imageStyle}>
            <Box>
              <Img src="/images/contactus-img.png" alt="Footballer" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={{ xs: 3, sm: 5, md: 7 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    placeholder="First Name"
                    label="First Name"
                    type="text"
                    name="firstName"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    placeholder="Last Name"
                    label="Last Name"
                    type="text"
                    name="lastName"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    placeholder="Email"
                    label="Email"
                    type="email"
                    name="email"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    placeholder="Phone Number"
                    label="Phone Number"
                    type="number"
                    name="phone"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" gutterBottom>
                    Select Subject?
                  </Typography>
                  <FormControl>
                    <FormGroup row={true}>
                      {checkboxitems.map((field: { label: string }, index) => (
                        <Typography key={index} variant="body2">
                          <Checkbox
                            key={index}
                            label={field.label}
                            size="small"
                            name="subject"
                            value={field.label}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </Typography>
                      ))}
                    </FormGroup>
                    <FormHelperText sx={{ color: "error.main" }}>
                      {formik.touched.subject && formik.errors.subject}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    placeholder="Write Your Message"
                    label="Messages"
                    multiline
                    maxRows={4}
                    name="message"
                    formik={formik}
                  />
                </Grid>
                <Grid item xs={12} sx={gridBtnWrapper}>
                  <DefaultButton
                    variant="contained"
                    sx={btnWrapper}
                    type="submit"
                  >
                    Send Message
                  </DefaultButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
