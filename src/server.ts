import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors';
import config from 'dotenv';
config.config({path:'./config.env'})

const app = express();

app.use(express.json());
app.use(cors())

app.get('/api/v1/user', (req: Request, res: Response, next: NextFunction)=>{
    try{
        const user = {
            id: 1,
            name: "eyobed",
            age: 23,
            blood:"O+"
        }

        res.status(200).json({
            message:process.env.ENVIROMENT,
            data:{
                user
            }
        })
    }catch(error){throw error}
})

app.listen(4000, ()=>{
    console.log('app listening on port ', 4000)
})