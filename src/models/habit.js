import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
    content: {
        type:String,
        required:true,
    },
    dates:[{
        date:String,
        complete:String
    }],
    
},{timestamps:true});

const Habit  = mongoose.model('Habit', habitSchema);
export default Habit;