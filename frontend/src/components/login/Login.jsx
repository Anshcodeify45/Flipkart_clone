import React from 'react'
import {Box , TextField ,Typography , Button , Dialog , styled} from '@mui/material';



const Component = styled(Box)`
height: 70vh;
width: 90vh;
padding: 0;
padding-top: 0;
`

const Poster = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width: 40%;
height: 100%;
padding: 45px 35px;
& > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600
}
`

function Login({open ,setOpen}) {

    const offLogin = () => {
        setOpen(false);
    }
  return (
    <Dialog open={open} onClose={offLogin}>
        <Component style={{display:'flex'}}>
            <Poster>
            <Typography variant="h5">Login</Typography>
            <Typography style={{marginTop: 20}}>Get access to your Orders , Wishlist and Recomendations</Typography>
            </Poster>
            <Box>
                <TextField variant='standard' label = 'Enter Email/Mobile number' />
                <TextField variant='standard' label = 'Enter Password' />
                <TextField>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</TextField>
                <Button>Login</Button>
                <Typography>OR</Typography>
                <Button>Request OTP</Button>
                <Typography>New to Flipkart? Create an account</Typography>
            </Box>

        </Component>
      
    </Dialog>
  )
}

export default Login
