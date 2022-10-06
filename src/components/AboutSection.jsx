import React from "react";
import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { aboutInfo } from "../utils/aboutInfo";
import AboutInfoCard from "./AboutInfoCard";

const Section = styled(Stack)({
  backgroundColor: "white",
  alignItems:'center',
  padding:'2rem',
});
const AboutSection = () => {
  return (
    <Section>
      <Typography variant="h4">
        Why Participate in{" "}
        <span className="highlighted-text">AI Challenges?</span>
      </Typography>
      <Stack maxWidth={{xs:'100%',xl:'80%'}}  flexDirection="row" justifyContent="center" flexWrap="wrap">
        {aboutInfo.map((info) =>{
          return <AboutInfoCard key={info.title} info={info}/>
        })}

      </Stack>
    </Section>
  );
};

export default AboutSection;
