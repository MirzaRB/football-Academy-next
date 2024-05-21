"use client";
import { DefaultButton, TextField } from "@/components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Card, Typography, Link, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { setUser } from "@/redux/slices/user-slice";
import { useRouter, useSearchParams } from "next/navigation";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export default function LoginPage() {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);

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
    },
  });

  return (
    <Card
      sx={{ p: 4, width: "400px", borderRadius: "26px" }}
      data-aos="flip-left"
    >
      <Typography variant="h5" mt={2}>
        Login
      </Typography>
      <Typography variant="h6" fontWeight={400} mb={1}>
        to get started
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack gap={1}>
          <TextField
            variant="outlined"
            placeholder="jhon@gmail.com"
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
          <Link
            fontWeight={400}
            fontSize={12}
            underline="none"
            href="#"
            color={"#333"}
          >
            Forgot Password?
          </Link>
          <DefaultButton
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 1, height: "56px" }}
            disabled={!formik.isValid}
          >
            Continue
          </DefaultButton>
          <Typography variant="body2" mb={1} textAlign="center" mt={1}>
            New User?{" "}
            <Link
              fontWeight={600}
              underline="none"
              href={`/sign-up?type=${type}`}
              color={"#333"}
            >
              Register
            </Link>
          </Typography>
        </Stack>
      </form>
    </Card>
  );
}
