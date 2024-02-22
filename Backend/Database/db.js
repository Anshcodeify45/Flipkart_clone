
import mongoose from "mongoose";


export const Connection = async (username , password) => {
    const URL = `mongodb://${username}:${password}@ac-y9ekzf1-shard-00-00.xqenrdw.mongodb.net:27017,ac-y9ekzf1-shard-00-01.xqenrdw.mongodb.net:27017,ac-y9ekzf1-shard-00-02.xqenrdw.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-iw364e-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecom`;
    try{
     await  mongoose.connect(URL);
     console.log("Database connected successfull Bro")
    }catch (error){
    console.log(`Error while connecting with database Bro`,error.message);
 }    
}

export default Connection;
