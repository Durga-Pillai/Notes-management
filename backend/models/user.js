import mongoose  from "mongoose"

const User = new mongoose.Schema( {

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    email: {
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    password:{type:String,required:true},
    created_at:{
        type:Date,
        default:Date.now
    }
})
export default User;