import express from 'express';
import { Server } from './helper/server';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from "compression";
import mongoose from "mongoose";
import cors from 'cors';
import { userRouter } from './routes/userRouter'
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const Port = process.env.PORT;
const server = new Server(Number(Port));
server.addMiddleware(cors({
    credentials: true
}))
server.addMiddleware(compression())
server.addMiddleware(cookieParser())
server.addMiddleware(bodyParser.json())
server.addMiddleware(userRouter)
server.start();

mongoose.Promise = Promise
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))

