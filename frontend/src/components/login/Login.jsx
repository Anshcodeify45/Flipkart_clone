import React from 'react'
import {Box , TextField ,Typography , Button , Dialog , styled} from '@mui/material';
import { useState } from 'react';
import { authenticateSignup } from '../../service/api';

const Component = styled(Box)`
height: 70vh;
width: 90vh;
padding: 0;
padding-top: 0;
`

const Poster = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width: 28%;
height: 82.5%;
padding: 45px 35px;
& > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600
}
`

const Wrapper = styled(Box)`
display : flex;
flex-direction : column;
padding: 25px 35px;
flex:1;
& > div , & > button , & > p{
    margin-top :20px;
}
`
const LoginBtn = styled(Button)`
text-transform : none;
background:#FB641B;
color:#fff;
height: 48px;
border-radius : 2px;
`

const RequestOtp = styled(Button)`
text-transform : none;
bacgroung:#fff;
color:#2874f0;
height: 48px;
border-radius : 2px;
box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
font-size : 16px;
color:#878787;
`

const CreateAccount = styled(Typography)`
font-size : 14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor : pointer;
`
const accountInitial = {
    login : {
        view:'login', 
        heading: 'Login',
        subHeading:'Get access to your Orders , Wishlist and Recomendations'
    },
    signup:{
        view : 'signup',
        heading: "Looks like you're new here!" ,
        subHeading : 'Sign up with your mobile number to get started',
    }
}


const signupData = {
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : '',
    phone: ''
}
function Login({open ,setOpen}) {

    const [LoginAcnt , Signupacnt] = useState(accountInitial.login)

    const [signup, setSignup] = useState(signupData);

    const togglesignup = () => {
        Signupacnt(accountInitial.signup)
    } 

    const offLogin = () => {
        setOpen(false);
        Signupacnt(accountInitial.login);
    }


    const onInputChange = (e) => {
        setSignup({...signup , [e.target.name] : e.target.value });
    }

    const signupData = async() => {
          await  authenticateSignup(signup);
    }
  return (
    <Dialog open={open} onClose={offLogin} PaperProps={{sx : {maxWidth: 'unset'}}} >
        <Component style={{display:'flex'}}>
            <Poster>
            <Typography variant="h5">{LoginAcnt.heading}</Typography>
            <Typography style={{marginTop: 20}}>{LoginAcnt.subHeading}</Typography>
            </Poster>
           {
            LoginAcnt.view === 'login' ?
                <Wrapper>
                <TextField variant='standard' label = 'Enter Email/Mobile number' />
                <TextField variant='standard' label = 'Enter Password' />
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
                <LoginBtn>Login</LoginBtn>
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequestOtp>Request OTP</RequestOtp>
                <CreateAccount onClick={() => togglesignup()}>New to Flipkart? Create an account</CreateAccount>
                </Wrapper>
            :
                <Wrapper>
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label = 'Enter Firstname' />
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label = 'Enter Lastname' />
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label = 'Enter Username' />
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label = 'Enter Email' />
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label = 'Enter Password' />
                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label = 'Enter Phone' />
                <LoginBtn onClick={()=> signupData()}> Continue</LoginBtn>
                
                </Wrapper>
           } 

        </Component>
      
    </Dialog>
  )
}

export default Login
