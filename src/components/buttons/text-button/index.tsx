'use client'

import { Typography } from "@mui/material";
import { useRouter } from 'next/navigation'

interface Props {
  title: string;
  color: string;
  hoverColor: string;
  redirectLink: string;
}

const TextButton = ({
  title,
  color,
  hoverColor,
  redirectLink,
}: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Typography
      sx={{
        color: color,
        fontSize: "14px",
        fontWeight: 400,
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          color: hoverColor,
        },
      }}
      onClick={() => {
        router.push(redirectLink);
      }}
    >
      {title}
    </Typography>
  );
};

export default TextButton;
