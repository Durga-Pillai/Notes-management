import mongoose from"mongoose"

const Savedpassword = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    service_name:{
        type:String,
        required:true
    },
    service_username:{
        type:String,
        required:true
    },
    encrypted_password:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        default:''
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    }

})
savedpasswordSchema.pre('save',function(next){
    this.updated_at=Date.now();
    next()
})
export default Savedpassword;