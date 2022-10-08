import React from "react";
import { Box, Stack } from "@mui/material";
import styled from "@emotion/styled";
import HackathonCard from "./HackathonCard";
import {hackathonsList} from "../utils/hackathonslist";

const HackethonContainer = styled(Stack)({
  minHeight: "80vh",
  backgroundColor: "#003145",
  flexDirection: "row",
  gap: "2rem",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop:'3rem'
});

const Hackathons = () => {
  return (
    <Stack
      sx={{ backgroundColor: "#003145" }}
      justifyContent="center"
      alignItems="center"
    >
      <HackethonContainer sx={{ width: { xl: "70%" } }}>
       {hackathonsList.map((hackathon) =>{
           return <HackathonCard key={hackathon.id} hackathon={hackathon}/>
       })}
      </HackethonContainer>
    </Stack>
  );
};

export default Hackathons;
