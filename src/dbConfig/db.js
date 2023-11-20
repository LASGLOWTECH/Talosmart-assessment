

import mongoose from 'mongoose'


export default async function  connectDB(){
 try{
   mongoose.connect(process.env.MONGO_URL)
    const connection=  mongoose.connection;

    connection.on('connected',()=>{

    console.log('Connected successfully');

    })

    connection.on('error', (err)=> {

        console.log('ensure Mongo db is running.' +err);
    process.exit(1)
        })

}


 catch(error){
    console.log('something went wrong');
    console.log(error);
   
 }


}
