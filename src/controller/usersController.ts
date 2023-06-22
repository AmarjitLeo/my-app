import express from "express";
import mongoose from "mongoose";
import { UserModel } from '../db/users';

export const create = async (req: express.Request , res: express.Response) => {
    try{
        const { firstname , lastname ,  email , password} = req.body;

        if( !firstname || !lastname ||  !email || !password){
            return  res.status(400).json({
                message: "bad request",
                status: false
            })
        }

        let user: any = await UserModel.findOne({ email });
        if(user){
            return  res.status(500).json({
                message: "user already exists!",
                status: false
            }) 
        }

        // await UserModel.create({ firstname , lastname ,  email , password});
        let createdUser: any =  new UserModel({ firstname , lastname ,  email , password})

        await createdUser.save();
        return  res.status(200).json({
            message: "User created succesfully!",
            user: createdUser,
            status: true
        }) 

     }catch(error){
        console.log(error)
        return res.status(400).json({
            message: "internal error in api!",
            status: false
        })
    }
}

export const getUsers = async (req: express.Request , res: express.Response) => {
    try{
        let users: any = await UserModel.find();
        return res.status(200).json({
            message: "users fetched succesfully!",
            users,
            status: true
        })

    }catch(error){
        console.log(error)
        return res.status(400).json({
            message: "internal error in api!",
            status: false
        })
    }
}

export const updateUser = async (req: express.Request , res: express.Response) => {
    try{
        let id:any = req.params.id;
        let payload: any = req.body;

        await UserModel.findOneAndUpdate({_id: id} , payload);

        return res.status(200).json({
            message: "user updated succesfully!",
            status: true
        })
        
    }catch(error){
        console.log(error)
        return res.status(400).json({
            message: "internal error in api!",
            status: false
        })
    }
}

export const getUserById = async (req: express.Request , res: express.Response) => {
    try{
        let id:any = req.params.id;
        
        let user: any = await UserModel.findOne({_id: id});
        return res.status(200).json({
            message: "user fetched succesfully!",
            user,
            status: true
        })
        
    }catch(error){
        console.log(error)
        return res.status(400).json({
            message: "internal error in api!",
            status: false
        })
    }
}

export const deleteUser = async (req: express.Request , res: express.Response) => {
    try{
        let id:any = req.params.id;
        
        let user: any = await UserModel.findOneAndDelete({_id: id});
        return res.status(200).json({
            message: "user deleted succesfully!",
            status: true
        })
        
    }catch(error){
        console.log(error)
        return res.status(400).json({
            message: "internal error in api!",
            status: false
        })
    }
}
