import React from 'react'
import { Stack } from '@mui/material';
import styled from '@emotion/styled';
import BrandLogo from "../assets/icons/brandLogo.png"

const HeaderContainer = styled(Stack)({
    width:'100%',
    minHeight:'4rem',
    justifyContent:'center',
    backgroundColor:'white',
    paddingLeft:'2rem',
})

const Header = () => {
  return (
   <HeaderContainer>
     <img
      className='brandLogo'
      src={BrandLogo}
      height="40px"
      width="40px"
     />
   </HeaderContainer>
  )
}

export default Header;