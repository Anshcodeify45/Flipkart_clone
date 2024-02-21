import React from 'react'

import {AppBar , Toolbar ,styled , Box , Typography} from '@mui/material'

import Search from './Search'
import CustomBtn from './CustomBtn'

const StyleHead = styled(AppBar)`
background : #2874f0
height : 55px;
`
const Component = styled (Box)`
 margin-left : 12%;
 line-height : 0;
 color: #FFFFFF;
 text-decoration: none;
`

const Subheading = styled(Typography)`
font-size : 10px;
font-style: italic;
`
const Plusimg = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})


const Btnbox = styled(Box)`
margin: 0 5% 0 auto;
`
function Header() {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyleHead>
        <Toolbar style={{minHeight : 55}}>
            <Component>
                <img src={logoURL} alt="Flipkart_logo" style={{width: 75}} />
                <Box component="span" style={{ display: 'flex' }}>
                    <Subheading> Explore &nbsp;
                       <Box component="span" style={{color:'#FFE500'}}>Plus</Box> 
                    </Subheading>
                    <Plusimg src={subURL} alt="plus" />
                </Box>
            </Component>
            <Search/>
            <Btnbox>
               <CustomBtn/>
            </Btnbox>
            
        </Toolbar>
    </StyleHead>
  )
}

export default Header
