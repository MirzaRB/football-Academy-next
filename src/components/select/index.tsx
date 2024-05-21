"use client";
import { SxProps, TextField, TextFieldProps, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useEffect } from "react";

type TInputProps = {
  label?: string;
  formik?: any;
  labelsx?:SxProps;
  name: string;
  background?: "gray";
  onChange?: (e: any) => void;
} & TextFieldProps;

export default function SelectInput(props: TInputProps): ReactNode {
  const { label, children, name, background,labelsx, formik, ...rest } = props;

  useEffect(() => {
    console.log(formik);
  }, [formik]);
  return (
    <>
      {label && (
        <Typography variant="subtitle2" gutterBottom sx={labelsx}>
          {label}
        </Typography>
      )}

      {formik ? (
        <>
          <TextField
            select
            fullWidth
            inputProps={{
              MenuProps: {
                PaperProps: { sx: { maxHeight: 200 } },
                // disableScrollLock: true,
                classes: {
                  paper: "no-scrollbar2-dropDown",
                },
              },
            }}
            onChange={(e) => console.log(e)}
            SelectProps={{
              IconComponent: KeyboardArrowDown,
            }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              ".MuiInputBase-root ": {
                backgroundColor: background === "gray" ? "#EBEBEB" : "#FFF",
                padding: "3px",
                px:"10px"
              },
              ".MuiSvgIcon-root": {
                color: background === "gray" ? "black" : "#A8ACB1",
                fontSize: background === "gray" ? "40px" : "25px",
              },
              ".MuiOutlinedInput-root": {
                borderRadius: "0px",
              },
            }}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            {...formik.getFieldProps(name)}
            {...rest}
          >
            {children}
          </TextField>
        </>
      ) : (
        <>
          <TextField
            select
            fullWidth
            inputProps={{
              MenuProps: {
                PaperProps: { sx: { maxHeight: 200 } },
                // disableScrollLock: true,
                classes: {
                  paper: "no-scrollbar2-dropDown",
                },
              },
            }}
            SelectProps={{
              IconComponent: KeyboardArrowDown,
              onChange: (e) => {
                rest?.onChange && rest?.onChange(e);
              },
            }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              ".MuiInputBase-root ": {
                backgroundColor: background === "gray" ? "#EBEBEB" : "#FFF",
                padding: "3px",
              },
              ".MuiSvgIcon-root": {
                color: background === "gray" ? "black" : "#A8ACB1",
                fontSize: background === "gray" ? "45px" : "30px",
              },
              ".MuiOutlinedInput-root": {
                borderRadius: "0px",
              },
            }}
            {...rest}
          >
            {children}
          </TextField>
        </>
      )}
    </>
  );
}
