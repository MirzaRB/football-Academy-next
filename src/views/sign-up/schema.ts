import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string()
    .min(2, "Username is Too Short!")
    .max(50, "Username is Too Long!")
    .matches(/^\S*$/, "Username Can't Contain spaces")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
  passwordConfirmation: Yup.string()
    .required("Please re-type your password")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "You need to accept the terms and conditions"
  ),
});