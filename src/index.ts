import { Server } from './helper/server';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { connectToMongo }from './utils/mongo/mongo'
import { GraphConnection } from './utils/graphql/graphql';

dotenv.config();
const Port = process.env.PORT;
const server = new Server(Number(Port));
server.start();
connectToMongo()


GraphConnection(server.getApp())

