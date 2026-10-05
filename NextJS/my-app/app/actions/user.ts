"use server"

import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
export async function signup(email:string, name:string, password:string){

    try{
            await prisma.users.create({
                data:{
                    email:email,
                    name:name,
                    password:password
                }
    
            })
            return true;
        }catch(err){
            return false;
        }
}