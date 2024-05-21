import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
  AccordionProps,
  SxProps
} from "@mui/material";

interface IAccordionProps extends AccordionProps {
  mainText: ReactNode;
  price?: ReactNode;
  mainTextSx?: SxProps;
  subText?: ReactNode;
  subTextSx?: SxProps;
  children: NonNullable<ReactNode>;
}

const CustomAccordion: React.FC<IAccordionProps> = ({
  mainText,
  price,
  mainTextSx,
  subText,
  subTextSx,
  children,
  ...rest
}) => {
  return (
    <Accordion {...rest} sx={{ boxShadow: 14, borderRadius: 1 }}>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems:'center'
          }}
        >
          <Stack direction="column" p={1} justifyContent="space-between">
            <Typography sx={mainTextSx}>{mainText}</Typography>
            {subText && <Typography sx={subTextSx}>{subText}</Typography>}
          </Stack>
          <Typography sx={mainTextSx}>{price}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
