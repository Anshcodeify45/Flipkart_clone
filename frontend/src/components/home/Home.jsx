import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Fragment } from 'react'
import { Box ,styled } from '@mui/material'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch , useSelector} from 'react-redux'
const Component = styled(Box)`
padding : 10px;
background: #F2F2F2;
`

function Home() {

  const { products } = useSelector(state => state.getProducts)

  console.log(products)  ;

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])


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
