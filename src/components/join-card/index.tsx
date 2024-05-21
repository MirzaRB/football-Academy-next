import { ChipButton, Img } from "@/components";
import { Box, Typography, Stack, SxProps } from "@mui/material";

const subtitle: SxProps = {
  height: { xs: "50px", sm: "60px", md: "160px" },
  textAlign: "start",
};
const btn: SxProps = {
  border: "3px solid #f40809",
  "&:hover": { color: "white", backgroundColor: "error.main" },
};

export default function JoinCard({
  title,
  description,
  imageSrc,
  buttonLink,
}: IJoinCard) {
  return (
    <Stack direction="column" spacing={3}>
      <Box textAlign="start">
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box sx={subtitle}>
        <Typography variant="subtitle2">{description}</Typography>
      </Box>
      <Box>
        <Img src={imageSrc} alt="img" />
      </Box>
      <Box>
        <ChipButton
          color="text.primary"
          title="Join"
          redirectLink={buttonLink}
          sx={btn}
        />
      </Box>
    </Stack>
  );
}
