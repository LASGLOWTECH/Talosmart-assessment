import mongoose from 'mongoose'

const Schema= mongoose.Schema

const userSchema= new Schema({
   username:{
        type: String ,
        required:[true, "please provide your username"],   
unique:true,
    },

  email:{
        type:String,
        required:[true, "please provide your email"],
        unique:true,

    },

  password:{
        type:String,
        required:[true, "please provide your username"],
        unique:true,
        
    },

    isVerified:{
        type:Boolean,
    default:false,
},

isAdmin:{
    type:Boolean,
default:false,
},
forgotPasswordToken:String,
forgotPasswordTokenExpiry:Date,
verifyToken:String,
verifyTokenExpiry: Date,

}, {timestamps:true}
)

// Schema defines the structure of your data base
const User= mongoose.models.users || mongoose.model
 ("users", userSchema)
 export default User