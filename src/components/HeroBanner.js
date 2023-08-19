import React from 'react'
import { Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/cbum.webp';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px' }
    }} position="relative" p="20px">
      <Typography 
      fontWeight="600" fontSize="26px">
        Your One Stop 
      </Typography>
      <Typography color="#FF2625" fontWeight="600" 
      fontSize="26px">Fitness Solution
      </Typography>
      
      <Typography fontWeight={700}
        sx={{ fontSize: { log: '44px', xs: '40px'}}}
        mb="23px" mt="30px"
      >
        Never Stop Hustling!
      </Typography>
      <Typography fontSize="22px"
      lineHeight="35px" mb={4}>
        Build a workout plan <br/>according to your needs
      </Typography>
      <Button variant="contained"
      color="error" href="#exercises"
      sx={{ backgroundColor: '#ff2625',
      padding: '10px'}}
      >Explore Exercises</Button>
      <Typography color="#ff2625" fontWeight={600} 
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
      }}
      marginTop="130px"
      fontSize="200px"
      >
        No Pain, <br/>No Gain!
      </Typography>
      <img src={HeroBannerImage} alt="banner" 
      className="hero-banner-img" /> 
    </Box>
  )
}

export default HeroBanner