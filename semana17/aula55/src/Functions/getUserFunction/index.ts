import express, { Request, Response } from 'express'
import { CreateUser } from "../../services/CreateUser"
import { GenerateToken } from '../../services/GenerateToken'

export const getUserById = (req: Request, res: Response) => {
    try {
        const generateToken = new GenerateToken
        const tokenValidation = generateToken.verifyToken(req.headers.token as string)
        const user = new CreateUser
        const userInfo = user.searchUserById(req.params.id)
        res.status(200).send(userInfo)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}