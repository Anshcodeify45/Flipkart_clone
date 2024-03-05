import React from 'react'
import { Box ,styled ,Typography , Button } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import Login from '../login/Login';
import { useState ,useContext} from 'react';
import { DataContext } from '../../context/Datasupply';
import Profile from './Profile';

const Wrapper = styled(Box)`
display : flex;
margin : 0 3% 0 auto;
& > button , & > p , & > div{
    margin-right : 40px;
    font-size : 16px;
    align-items:center;
}
`

const Container = styled(Box)`
  display : flex;
`
const LoginBTn = styled(Button)`
    color : #2874f0;
    background : #FFFFFF;
    text-transform : none;
    padding : 5px 40px;
    border-radius : 2px;
    box-shadow : none;
    font-weight: 600;
    height : 32px;


`
function CustomBtn() {


  const [open , setOpen] = useState(false);

  const { account  ,setAccount} = useContext(DataContext);

  const openLogin = () => {
    setOpen(true);
  }

  return (
    <Wrapper>
      {
        account ? < Profile account={account} setAccount={setAccount}/> :
        
        <LoginBTn variant="contained"  onClick={()=> openLogin()}>Login</LoginBTn>
      }
       
        <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>

        <Container>
            <ShoppingCart/>
            <Typography>Cart</Typography>
        </Container>
        <Login open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomBtn
