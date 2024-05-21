"use client";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { SxProps } from "@mui/material/styles";

interface Props{
  title: string;
  color: string;
  hoverColor?: string;
  redirectLink: string;
  index?: number | null;
  setActive?: (num: number | null) => void;
  sx?: SxProps;
  onClick?: () => void;
}

const ChipButton = ({
  title,
  color,
  hoverColor,
  redirectLink,
  setActive,
  index=null,
  sx,
  onClick,
}: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Typography
      sx={{
        width: "90px",
        color: color,
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "0.3s",
        border: `2.5px solid ${color}`,
        borderRadius: "50px",
        padding: "6px 12px",
        textAlign: "center",
        "&:hover": {
          background: hoverColor,
        },
        ...sx,
      }}
      onClick={() => {
        if (onClick) {
          onClick();
        }
        setActive ? setActive(index) : () => {};
        router.push(redirectLink);
      }}
    >
      {title}
    </Typography>
  );
};

export default ChipButton;
