import React, { useState } from 'react'
import { Typography , Box , Menu ,MenuItem ,styled } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component = styled(Menu)`
margint-top:5px;
`

const Logout = styled(Typography)`
font-size:14px;
margin-left:20px;
`
function Profile({account , setAccount}) {
    const [open , setOpen] = useState(false);

    const handleCLick  = (event) =>{
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logoutUser = () =>{
        setAccount('');
    }
  return (
    <>
      <Box onClick={handleCLick}>
      <Typography style={{marginTop:2 , cursor:'pointer'}}>
        {account}
      </Typography>
      </Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={() => {handleClose(); logoutUser()}}>
            <PowerSettingsNewIcon color='primary' fontSize='small'/>
            <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  )
}

export default Profile
