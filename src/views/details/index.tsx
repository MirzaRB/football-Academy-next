"use client";
import { DefaultButton, SelectInput, TextField } from "@/components";
import {
  Card,
  Typography,
  Stack,
  SxProps,
  Grid,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { parse } from "date-fns";
import { positions } from "@/utils/dropdown-data";

const cardWrap: SxProps = {
  p: 6,
  width: "650px",
  borderRadius: "26px",
  maxHeight: "560px",
  overflow: "auto",
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("Full Name is required"),
  address: Yup.string().required("Address is required"),
  dob: Yup.date()
    .transform((value, originalValue, context) => {
      if (context.isType(value)) return value;
      return parse(originalValue, "dd/MM/yyyy", new Date());
    })
    .typeError("Enter the correct format (DD/MM/YYYY)")
    .required("Date of Birth is required")
    .min("1945-11-13", "Date is too early"),
  position: Yup.string().required("Position is required"),
  currentTeam: Yup.string().required("Current Team is required"),
  years: Yup.number().positive().required("Years is required"),
});

export default function DetailPage() {
  const router = useRouter();

  const initialValues = {
    fullname: "",
    address: "",
    dob: "",
    position: "center",
    currentTeam: "",
    years: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      router.push("/payment");
    },
  });
  return (
    <Card sx={cardWrap} data-aos="flip-left" className="no-scrollbar">
      <Typography variant="h5" mt={1}>
        Enter Your Details
      </Typography>
      <Typography variant="h6" fontWeight={400} mb={1}>
        to get started
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={1}>
          <TextField
            variant="outlined"
            placeholder="Full Name"
            type="text"
            name="fullname"
            autoComplete="false"
            formik={formik}
          />
          <TextField
            variant="outlined"
            placeholder="Address"
            type="text"
            name="address"
            autoComplete="false"
            formik={formik}
          />
          <TextField
            variant="outlined"
            placeholder="D.O.B (MM/DD/YYYY)"
            type="text"
            name="dob"
            formik={formik}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <SelectInput
                name="position"
                formik={formik}
                variant="outlined"
                sx={{ borderRadius: "25px", marginTop: "7px" }}
                
              >
                <MenuItem disabled value="">
                  <em>Position</em>
                </MenuItem>
                {positions.map((positions, index) => (
                  <MenuItem key={index} value={positions.value}>
                    {positions.label}
                  </MenuItem>
                ))}
              </SelectInput>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                variant="outlined"
                placeholder="Current BAFA Team"
                type="text"
                name="currentTeam"
                autoComplete="false"
                formik={formik}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                placeholder="Years Playing"
                type="number"
                name="years"
                formik={formik}
              />
            </Grid>
          </Grid>
          <DefaultButton
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 2, height: "56px" }}
            disabled={!formik.isValid}
          >
            Continue
          </DefaultButton>
        </Stack>
      </form>
    </Card>
  );
}
