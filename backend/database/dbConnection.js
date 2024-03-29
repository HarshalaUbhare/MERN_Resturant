import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        dbName:"Resturant",
    })
   .then(()=>{
    console.log("Connected to MongoDB...");

   })
   .catch((err)=>{
       console.log(`MongoDB connection error: , ${err}`);
   });
};

