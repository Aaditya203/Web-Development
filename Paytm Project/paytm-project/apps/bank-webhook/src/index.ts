import express from "express";
import {prisma} from "@repo/db";
const app = express();

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
            prisma.balance.update({
                where:{
                    userId:paymentInformation.userId
                },
                data:{
                    amount:{
                        increment:Number(paymentInformation.amount),
                    }
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