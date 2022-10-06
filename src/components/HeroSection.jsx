import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import heroImage from "../assets/icons/heroImage.svg";
import HeroStats from "./HeroStats";

const HeroCallToAction = styled(Stack)({
  maxWidth: "450px",
  alignItems:'flex-start',
  
});

const HeroImage = styled(Box)({
});

const ChallengeButton = styled(Button)({
    backgroundColor:'white',
    color:'black',
    textTransform:'none',
    marginTop:'2rem',
    fontWeight:'bold',
   "&:hover":{
         backgroundColor:'black',
         color:'white',
    }
    

})

const HeroSection = () => {
  return (
    <>
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{color:'white',backgroundColor:'#003145',padding:'2rem'}}
      
    >
      <HeroCallToAction>
        <Typography
          variant="h4"
          fontWeight="600"
          lineHeight="2.5rem"
          fontFamily="Poppins"
          marginBottom="1rem"
        >
          Accelerate Innovation with Global AI Challenges
        </Typography>
        <Typography>
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to test on diverse datasets
          allowing you to foster learning through competitions.
        </Typography>
        <ChallengeButton>
            Create Challenge
        </ChallengeButton>
      </HeroCallToAction>
      <HeroImage>
        <img src={heroImage} />
      </HeroImage>
    </Stack>
    <HeroStats/>
          </>
  );
};

export default HeroSection;
