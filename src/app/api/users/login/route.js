import connectDB from '@/src/dbConfig/db';
import User from '@/src/models/userModels';

import {NextRequest, NextResponse} from "next/server";

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"; 


connectDB() 
export  async  function POST(NextRequest){
   
    try{

const reqBody= NextRequest.json()
const {email, password}= reqBody;
console.log(reqBody)
// check if user exist
const user= await User.findOne({email})
if(!user){
return NextResponse.json ({error:"User does not exist"}, {status:400})

}

// check if password is correct
const validPassword= await bycryptjs.compare
(password, user.password)
if(!validPassword){
    return NextResponse.json ({error:"Invalid password"}, {status:400})
    
    }

// create a token  Data
const tokenD={
    id:user._id,
    username:user.username,
   email:user.email
}
// create a token
const token =await jwt.sign(tokenDate, process.env.JWT_SECRETE_KEY, {expiresIn:"1h"})
const response=NextResponse.json({
    message:"Login Successful",
    success:true,
})
response.cookies.set("token", token, 
{httponly:true ,
})
return response;
    }

    catch(error){
        return NextResponse.json(
            {error:error.message},
            {status:500}
        )
    }
}