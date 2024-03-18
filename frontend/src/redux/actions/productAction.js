import axios from "axios";

import * as actionTypes from '../constants/productConstant'

const URL = 'http://localhost:8000';

export const getProducts = ()   =>  async (dispatch) => {
    try{
       const {data} = await axios.get(`${URL}/products`);
       dispatch({type:actionTypes.Get_products_success , payload:data});

    }catch(error){
        console.log({type:actionTypes.Get_products_fail,payload: error.message});
    }
}