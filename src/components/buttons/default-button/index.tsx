import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";

interface DefaultButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function DefaultButton({
  children,
  ...rest
}: DefaultButtonProps) {
  return (
    <>
      <Button {...rest}>{children}</Button>
    </>
  );
}
