import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Fragment } from 'react'
import { Box ,styled } from '@mui/material'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch , useSelector} from 'react-redux'
import Slide from './Slide'
import Midslide from './Midslide'
import Midbanner from './Midbanner'

const Component = styled(Box)`
padding : 10px;
background: #F2F2F2;
`

function Home() {

  const { products } = useSelector(state => state.getProducts)

  console.log(products+'data')  ;

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])


  return (
    <Fragment>
      <Navbar/>
      <Component>
         <Banner/>
         <Midslide products={products} title='Deal of the Day' timer={true}/>
         <Midbanner/>
         <Slide products={products} title='Discounts for you' timer={false}/>
         <Slide products={products} title='Suggesting items' timer={false}/>
         <Slide products={products} title='Top selection' timer={false}/>
         <Slide products={products} title='Recomended Item' timer={false}/>
         <Slide products={products} title='Trending Offers' timer={false}/>
         <Slide products={products} title="Season's top picks" timer={false}/>
         <Slide products={products} title='Top deals on Accessories' timer={false}/>
      </Component>
     
    </Fragment>
  )
}

export default Home
