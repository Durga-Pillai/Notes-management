import mongoose from "mongoose"
const Note = new mongoose.Schema({
    user_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
    },
    title:{
      type:String,
      default:''
    },
    content:{
      type:String,
      required:true
    },
    created_at:{
      type:Date,
      default:Date.now
    },
    updated_At:{
      type:Date,
      default:Date.now
    }
})

export default Note;
