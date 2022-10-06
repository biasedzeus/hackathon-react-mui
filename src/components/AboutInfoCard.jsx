import React from 'react';
import { Stack,Typography } from '@mui/material';
import styled from '@emotion/styled';

const CardContainer = styled(Stack)({
   backgroundColor:'#d5d5d5',
   maxWidth:'540px',
   padding:'2rem',
   margin:'1rem',
   borderRadius:'.5rem',
})

const AboutInfoCard = ({info}) => {
  return (
    <CardContainer>
        <img
         src={info.logo}
         width="55px"
         height="55px"
         />
        <Typography fontWeight="600" margin=".5rem 0">{info.title}</Typography>
        <Typography>{info.description}</Typography>
    </CardContainer>
  )
}

export default AboutInfoCard;