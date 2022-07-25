import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';


//init express
const app =express();
dotenv.config();

//int env variables
const PORT=process.env.SERVER_PORT || 5050;

//listen server
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`.bgGreen.black);
})