import mongoose from 'mongoose'
const connection =async()=>{
    try{
        if(mongoose.connection.readyState>=1){
            return;
        }
        await mongoose.connect('mongodb://localhost:27017/myapp')
        console.log("connected to db");
    }catch(err){
        console.log(err);
        
    }
}

export default connection