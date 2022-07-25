import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';


//init express
const app =express();

//int env variables
const PORT=process.env.SERVER_PORT;

//listen server
app.listen(PORT,()=>{
    console.log(`server is on port ${PORT} `);
})