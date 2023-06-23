import express from "express";

export const apiResponse = async( res: express.Response ,statusCode: number , message: String , data: any, status: boolean , error: any) => {
    return res.status(statusCode).json(
    {
        statusCode, 
        message,
        data: await data,
        status,
        error
    }
    )
}