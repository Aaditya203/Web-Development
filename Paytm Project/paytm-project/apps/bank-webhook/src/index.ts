import express from "express";
import {prisma} from "@repo/db";
const app = express();

app.use(express.json())
type PaymentInformation = {
    token:string;
    userId:string;
    amount:number;
}

app.post("/webhook/hdfc",async(req,res)=>{
    const paymentInformation : PaymentInformation = {
        token: req.body.token,
        userId:req.body.user_identifier,
        amount:req.body.amount
    };

    try{
        await prisma.$transaction([
            prisma.balance.upsert({
                where:{
                    userId:paymentInformation.userId
                },
                update:{
                    amount:{
                        increment:Number(paymentInformation.amount),
                    }
                },
                create:{
                    userId:paymentInformation.userId,
                    amount:paymentInformation.amount,
                    locked:0
                }
            }),
            prisma.onRampTransaction.updateMany({
                where:{
                    token:paymentInformation.token
                },
                data:{
                    status:"Success"
                }
            })
        ])
        res.json({
            message:"Payment Success"
        })
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            message:"Payment Failed"
        })
    }
})

app.listen(3003)