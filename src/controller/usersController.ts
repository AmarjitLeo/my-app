import express from "express";
import mongoose from "mongoose";
import { UserModel } from '../db/users';
import { apiResponse } from "../helper/apiResonse";

export const create = async (req: express.Request, res: express.Response) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        if (!firstname || !lastname || !email || !password) {
            return await apiResponse(res, 400, "bad request", null, false, null)
        }
        let user: any = await UserModel.findOne({ email });
        if (user) {
            return await apiResponse(res, 500, "user already exists!", null, false, null)
        }
        // await UserModel.create({ firstname , lastname ,  email , password});
        let createdUser: any = new UserModel({ firstname, lastname, email, password })

        await createdUser.save();
        return await apiResponse(res, 200, "User created succesfully!", createdUser, true, null)

    } catch (error) {
        console.log(error)
        return await apiResponse(res, 500, "internal error in api!", null, false, error)
    }
}

export const getUsers = async (req: express.Request , res: express.Response) => {
    try{
        let users: any = await UserModel.find();
        return await apiResponse(res, 200, "users fetched succesfully!", users, true, null)

    }catch(error){
        console.log(error)
        return await apiResponse(res, 500, "internal error in api!", null , false, error)
    }
}

export const updateUser = async (req: express.Request , res: express.Response) => {
    try{
        let id:any = req.params.id;
        let payload: any = req.body;
        await UserModel.findOneAndUpdate({_id: id} , payload);
        payload.id = req.params.id;
        return await apiResponse(res, 200, "user updated succesfully!", payload , true , null)
        
    }catch(error){
        console.log(error)
        return await apiResponse(res, 500, "internal error in api!", null , false , error)
    }
}

export const getUserById = async (req: express.Request , res: express.Response) => {
    try{
        let id:any = req.params.id;
        
        let user: any = await UserModel.findOne({_id: id});
        return await apiResponse(res, 200, "user fetched succesfully!", user , true , null)
        
    }catch(error){
        console.log(error)
        return await apiResponse(res, 500, "internal error in api!", null , false , error)
    }
}

export const deleteUser = async (req: express.Request , res: express.Response) => {
    try{
        let id:any = req.params.id;
        let user: any = await UserModel.findOneAndDelete({_id: id});
        return await apiResponse(res, 200, "user deleted succesfully!", {id} , true , null)
        
    }catch(error){
        console.log(error)
        return await apiResponse(res, 500, "internal error in api!", null , false , error)
    }
}
