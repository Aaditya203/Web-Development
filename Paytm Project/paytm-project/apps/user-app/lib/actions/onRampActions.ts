"use server"
import { OnRampStatus, prisma } from "@repo/db"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth";
export async function onRampTransaction(provider:string,amount:number){
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const token = Math.random().toString();

    if(!userId){
        return{
            message:"User Not Logged In!!"
        }
    }
    await prisma.onRampTransaction.create({
        data:{
            userId:userId,
            token:token,
            provider:provider,
            amount:amount,
            startTime:new Date(),
            status:OnRampStatus.Processing
        }
    })

    return {
        message:"On Ramp Transaction Created!!"
    }
}