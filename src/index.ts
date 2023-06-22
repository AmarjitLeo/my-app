import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from "compression";
import mongoose from "mongoose";
import cors from 'cors';

import { userRouter } from './routes/userRouter'

const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression())

app.use(cookieParser())

app.use(bodyParser.json())

app.use(userRouter);

app.get('/',(req,res) =>{
    res.send("basic crud")
})

const server = http.createServer(app)
server.listen(3000 , () => {
    console.log("server is connected!!!")
})

const MONGO_URL = "mongodb+srv://amarjeetsingh:hl70HFIFMEhPwgJl@cluster0.tjqtwkl.mongodb.net/?retryWrites=true&w=majority"
mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))

