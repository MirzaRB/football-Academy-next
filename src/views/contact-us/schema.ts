import * as Yup from 'yup'

export const validationSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("First Name is required"),
    lastName: Yup.string().min(2).max(25).required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Phone Number must contain only digits")
      .required("Phone Number is required"),
    subject: Yup.array().min(1, "Please select at least one subject"),
    message: Yup.string().required("Message is required"),
  });