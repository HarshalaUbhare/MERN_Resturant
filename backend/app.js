import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js'
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRouter.js';


const app = express();
dotenv.config({path:'./config/config.env'});

 app.use(cors({
 origin:[process.env.FRONTEND_URL],
 methods:['POST'],
 credentials:true,

 }));

app.use(express.json()); //string to object
app.use(express.urlencoded({ extended:true}));
app.use('/api/v1/reservation', reservationRouter)

app.get("/",(req,res,next) => {
    return  res.status(200).json({
        success:true,
        message:"Hello word"
    })
})

dbConnection();
app.use(errorMiddleware)






export default app;