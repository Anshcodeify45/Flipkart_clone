
import { products } from "./DATA/data.js"
import Product from "./Structre/product-schema.js"

const DefaultDT = async () => {
   try {

    await Product.insertMany(products);
    console.log('Data imported Successfully Bro')

   } catch(error){
    console.log('Error while inserting deafault data',error.message)
   }
}

export default DefaultDT;