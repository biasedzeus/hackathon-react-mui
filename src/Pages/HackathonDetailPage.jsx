import React from "react";
import { Stack, Paper, Box, Typography, Button } from "@mui/material";
import Header from "../components/Header";
import styled from "@emotion/styled";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiChartBar } from "react-icons/hi";
import OverViewDetails from "../components/OverViewDetails";

const HackDetailWrapper = styled(Stack)({
  backgroundColor: "#003145",
  width: "100%",
  paddingLeft: "8rem",
  paddingTop: "8rem",
});
const HackathonDetail = ({}) => {
  return (
    <>
      <Header />
      <Box sx={{ width: "100%" }}>
        <HackDetailWrapper>
          <Stack
            sx={{
              backgroundColor: "#FFCE5C",
              width: "fit-content",
              padding: ".5rem 1rem",
              borderRadius: "5px",
            }}
          >
            <Typography>
              <AiOutlineClockCircle /> Starts on 17th june, 2022 09:00 PM
              (Indian Standard Time)
            </Typography>
          </Stack>
          <Typography
            variant="h3"
            fontWeight="500"
            padding="1rem 0rem"
            color="white"
          >
            Data Sprint 72 - Butterfly Identification
          </Typography>
          <Typography variant="subtitle-1" color="white">
            Identify the class to which each butterfly belongs to
          </Typography>
          <Button
          startIcon={<HiChartBar/>}
            sx={{
              width: "fit-content",
               padding: ".5rem 2rem",
              backgroundColor: "white",
              color:'#003145',
              marginTop:'2rem',
              marginBottom:'1rem'
            }}
            
          >
             Easy
          </Button>
        </HackDetailWrapper>
        <OverViewDetails/>
      </Box>
    </>
  );
};

export default HackathonDetail;
