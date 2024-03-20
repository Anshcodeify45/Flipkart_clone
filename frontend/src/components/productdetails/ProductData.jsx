import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductData } from '../../redux/actions/productAction';




function ProductData() {

    const dispatch =useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(getProductData(id))
    },[dispatch , id])
  return (
    <div>
      
    </div>
  )
}

export default ProductData
