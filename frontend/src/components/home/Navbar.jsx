import React from 'react'
import { Box , styled , Typography } from '@mui/material'
import { navData } from '../../constants/data'


const Navstyle = styled(Box)`
display : flex;
margin : 55px 130px 0 130px;
justify-content : space-between;
`

const Wrapper = styled(Box)`
 padding : 12px 8px;
 text-align : center;
`

const Text = styled(Typography)`
font-size:14px;
font-weight : 600;
font-family:inherit;

`
function Navbar() {
  return (
    <Navstyle>
      {
        navData.map(data => (
            <Wrapper>
                <img src={data.url} alt="nav"  style={{width : 64}}/>
                <Text>{data.text} </Text>
            </Wrapper>
        ))
      }
    </Navstyle>
  )
}

export default Navbar
