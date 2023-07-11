import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors';

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
        console.log(user)

        res.status(200).json({
            message:"data sent",
            data:{
                user
            }
        })
    }catch(error){throw error}
})
console.log("here")

app.listen(4001, ()=>{
    console.log('app listening on port ', 4000)
})