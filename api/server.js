import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import studentRoute from './routes/student.js';
import mongoDBConnect from './config/db.js';

//init express
const app =express();
dotenv.config();

//middleware
app.use(express.json())
app.use(express.json(express.urlencoded({extended:false})))

//int env variables
const PORT=process.env.SERVER_PORT || 5050;

//routes
app.use('/api/student',studentRoute)

//listen server
app.listen(PORT,()=>{
    mongoDBConnect();
    console.log(`server running on port ${PORT}`.bgGreen.black);
})