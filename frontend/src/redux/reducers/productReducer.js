import * as actionType from '../constants/productConstant'


export const getProductsReducer= (state= { products: {}},action) => {
    switch(action.type){
        case actionType.Get_products_success : 
            return { products : action.payload }

        case actionType.Get_products_fail :
            return {error : action.payload}

        default:
            return state
    }
}