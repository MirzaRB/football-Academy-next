import {
  Checkbox as MuiCheckBox,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface ICheckboxProps extends CheckboxProps {
  label: string;
}

export default function Checkbox({ label, ...rest }: ICheckboxProps) {
  return (
    <>
      <FormControlLabel
        control={
          <MuiCheckBox
            icon={<RadioButtonUncheckedIcon color="primary"/> } 
            checkedIcon={<CircleCheckedFilled />}
            {...rest}
          />
        }
        label={label}
        disableTypography
      />
    </>
  );
}
