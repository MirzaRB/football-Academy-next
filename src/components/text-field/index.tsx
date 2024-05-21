import {
  TextField as MuiTextField,
  Typography,
  TextFieldProps,
  TypographyVariants,
  SxProps,
} from "@mui/material";

type ITextField = {
  label?: string;
  formik?: any;
  name: string;
  labelsx?:SxProps;
  typoVariant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
} & TextFieldProps;

export default function TextField(props: ITextField): ReactNode {
  const { name, label, typoVariant = "subtitle2", formik,labelsx, ...rest } = props;
  return (
    <>
      <Typography variant={typoVariant} sx={labelsx} gutterBottom>
        {label}
      </Typography>
      {formik ? (
        <>
          <MuiTextField
            sx={{ ".MuiFormHelperText-root": { whiteSpace: "nowrap" }}}
            name={name}
            fullWidth
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            {...formik.getFieldProps(name)}
            {...rest}

          />
        </>
      ) : (
        <>
          <MuiTextField name={name} fullWidth {...rest} />
        </>
      )}
    </>
  );
}
