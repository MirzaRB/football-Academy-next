"use client";
import { ChipButton, DefaultButton, TextField } from "@/components";
import { Card, Typography, Stack, SxProps, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setUser } from "@/redux/slices/user-slice";
import * as React from "react";
import CustomAccordion from "@/components/accordian";
import { useRouter } from "next/navigation";

const cardWrap: SxProps = {
  p: 6,
  width: "650px",
  borderRadius: "26px",
  maxHeight: "560px",
  overflow: "auto",
};
const buttonBoxWrap: SxProps = {
  display: "flex",
  justifyContent: "end",
  padding: "15px",
};
const buttonWrap: SxProps = {
  border: "1px solid black",
  "&:hover": {
    color: "text.secondary",
    backgroundColor: "#024F97",
  },
};
const accordianMainWrap: SxProps = {
  fontSize: "18px",
  fontWeight: "500",
  color: "#333",
};
const accordianSubWrap: SxProps = {
  fontSize: "13px",
  fontWeight: "400",
  color: "#024F97",
};

export default function PaymentPage() {
  const [accordionOpen, setAccordionOpen] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      setUser({
        id: "1",
        name: "user",
        email: "abc@gmail.com",
        role: "player",
        createdAt: "2023-09-13",
        package: "premium",
      })
    );
    localStorage.setItem("access_token", "access_token");
    router.push("/player/dashboard");
  };
  const handleChipButtonClick = () => {
    setAccordionOpen(false);
    setButtonDisabled(false);
  };
  const handleAccordionToggle = () => {
    setAccordionOpen((prevState) => !prevState); // Toggle the state
  };
  return (
    <Card sx={cardWrap} data-aos="flip-left" className="no-scrollbar">
      <Typography variant="h5" mt={1} mb={5}>
        Choose Your Package
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack gap={5}>
          <CustomAccordion
            onChange={handleAccordionToggle}
            expanded={accordionOpen}
            mainText="With Starter Pack"
            subText="Whats included?"
            price="£000"
            mainTextSx={accordianMainWrap}
            subTextSx={accordianSubWrap}
          >
            <ul style={{ padding: "0px 15px" }}>
              <li>
                <Typography variant="caption">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  fugit.
                </Typography>
              </li>
              <li>
                <Typography variant="caption">
                  sit amet consectetur adipisicing elit. Quo, fugit Lorem
                  ipmsnas.
                </Typography>
              </li>
            </ul>
            <Box sx={buttonBoxWrap}>
              <ChipButton
                color="text.primary"
                title="Select"
                hoverColor={"#024F97"}
                sx={buttonWrap}
                redirectLink="#"
                onClick={handleChipButtonClick}
              />
            </Box>
          </CustomAccordion>
          <CustomAccordion
            disabled
            mainText="With Starter Pack"
            mainTextSx={accordianMainWrap}
            price="£000"
          >
            <Typography>Disabled Accordion</Typography>
          </CustomAccordion>
          <DefaultButton
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 2, height: "56px" }}
            disabled={buttonDisabled}
          >
            Finish
          </DefaultButton>
        </Stack>
      </form>
    </Card>
  );
}
