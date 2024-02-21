import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Fragment } from 'react'
import { Box ,styled } from '@mui/material'


const Component = styled(Box)`
padding : 10px;
background: #F2F2F2;
`

function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Component>
         <Banner/>
      </Component>
     
    </Fragment>
  )
}

export default Home
