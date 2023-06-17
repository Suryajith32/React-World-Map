import { Box, Stack } from '@mui/material'
import React from 'react'

const Sidebar = ({lat,lng}) => {
  return (
    <div>
        <Box display='flex' justifyContent='center' alignItems='center' sx={{width:'50em',height:'10vh',bgcolor:'#FFFFFF',position:'absolute',bgcolor:'rgba(35, 55, 75, 0.9)',color:'#FFFFFF',fontFamily:'monospace',zIndex:1,top:0,left:0,m:'12px',borderRadius:'4px'}}>
          <Stack  direction='row' spacing={3}>
            <Box>Latitude: {lat}</Box>
            <Box>Longitude:{lng}</Box>
          </Stack>
        </Box>  
    </div>
  )
}

export default Sidebar