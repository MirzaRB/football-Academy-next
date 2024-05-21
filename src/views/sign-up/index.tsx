"use client";
import { DefaultButton, TextField } from "@/components";
import {
  Card,
  Typography,
  Link,
  Stack,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  FormControl,
  SxProps,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { validationSchema } from "./schema";
import { setUser } from "@/redux/slices/user-slice";
import { useSearchParams, useRouter } from "next/navigation";

const cardWrap: SxProps = {
  p: 3,
  width: "400px",
  borderRadius: "26px",
  maxHeight: "560px",
  overflow: "auto",
};
const termsWrap: SxProps = {
  "& .MuiFormControlLabel-label": {
    color: "#333",
    fontSize: "12px",
    fontWeight: "400",
  },
  ".MuiSvgIcon-root": {
    color: "#333",
  },
};

export default function SignupPage() {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const initialValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    termsAndConditions: false,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);

      if (type === "player") {
        router.push("/details");
      } else {
        if (type)
        dispatch(
          setUser({
            id: "1",
            name: "user",
            email: values.email,
            role: type,
            createdAt: "2023-09-13",
          })
        );
      localStorage.setItem("access_token", "access_token");
        router.push(`/${type}/dashboard`);
      }
    },
  });
  return (
    <Card className="no-scrollbar" sx={cardWrap} data-aos="flip-left">
      <Typography variant="h5">Signup</Typography>
      <Typography variant="h6" fontWeight={400}>
        to get started
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={1}>
          <TextField
            variant="outlined"
            placeholder="Username"
            type="text"
            name="username"
            autoComplete="false"
            formik={formik}
          />
          <TextField
            variant="outlined"
            placeholder="Email"
            type="email"
            name="email"
            autoComplete="false"
            formik={formik}
          />
          <TextField
            variant="outlined"
            placeholder="Password"
            type="password"
            name="password"
            formik={formik}
          />
          <TextField
            variant="outlined"
            placeholder="Confirm Password"
            type="password"
            name="passwordConfirmation"
            formik={formik}
          />
          <FormControl>
            <FormControlLabel
              control={<Checkbox size="small" name="termsAndConditions" />}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Agree to Our terms and Conditions"
              sx={termsWrap}
            />
            {formik.errors.termsAndConditions && (
              <FormHelperText sx={{ color: "error.main" }}>
                {formik.errors.termsAndConditions}
              </FormHelperText>
            )}
          </FormControl>
          <DefaultButton
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ height: "50px" }}
            disabled={!formik.isValid}
          >
            Continue
          </DefaultButton>
          <Typography variant="body2" textAlign="center">
            Already Registered?{" "}
            <Link
              fontWeight={600}
              underline="none"
              href={type ? `/login?type=${type}` : `/login`}
              color={"#333"}
            >
              Login
            </Link>
          </Typography>
        </Stack>
      </form>
    </Card>
  );
}
