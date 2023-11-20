import connectDB from '@/src/dbConfig/db';
import User from '@/src/models/userModels';


import {NextRequest, NextResponse} from "next/server";

import bcryptjs from "bcryptjs";

connectDB()

export async function POST  (NextRequest) {
    const reqBody = await NextRequest.json()
    try {
        const reqbody = await NextRequest.json()
        const { username, email, password } = reqBody
        console.log(reqBody);
        // check if use already exist
        const user = User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "user exist already" }, { status: 400 })
        }
        //  harsh password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
            (password, salt)

        const newUser = new User({
            username,
             email,
             password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "user created succesfully",
            success: true,
            savedUser

        },
     )
    }
    catch (error) {
        return NextResponse.json({ error: error.mesage },
            { status: 500 })
    }

}