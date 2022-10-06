import React from 'react'
import { Stack } from '@mui/material';
import styled from '@emotion/styled';

// components
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const HomeContainer = styled(Stack)({
    width:'100%',
    flexDirection:'column',
})

const Home = () => {
  return (
    <HomeContainer>
        <Header/>
        <HeroSection/>
    </HomeContainer>
  )
}

export default Home