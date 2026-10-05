import {prisma} from "@repo/db"
import bcrypt from "bcrypt";
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions:NextAuthOptions = {
    providers:[ 
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                phone:{
                    label:"Phone Number",
                    type:"text",
                    placeholder:"9876543210"
                },
                email:{
                    label:"Email",
                    type:"text",
                    placeholder:"johndoe@gmail.com"
                },
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials:any){
                if(!credentials.phone || !credentials.email || !credentials.password){
                    return null;

                }
                const user = await prisma.user.findFirst({
                    where:{
                        email:credentials.email
                    }
                })

                if(user){
                    const passwordValidation = await bcrypt.compare(credentials.password,user.password)
                    if(passwordValidation){
                        return{
                            id:user.id.toString(),
                            email:user.email,
                            name:user.name
                        }
                    }
                    return null;
                }

                try{
                    const hashedPassword = await bcrypt.hash(credentials.password,10);
                    const newUser = await prisma.user.create({
                        data:{
                            email:credentials.email,
                            password:hashedPassword,
                            number:credentials.phone
                        }
                    })
                    return {
                    id:newUser.id.toString(),
                    email:newUser.email,
                    name:newUser.name
                }
                }
                catch(e){
                    console.log(e);
                    return null;
                }

                
            }
        })
    ],
    secret:process.env.JWT_SECRET,
    callbacks:{
        async session({token,session}:{token:JWT,session:Session}){
            if(session.user){
                session.user.id = token.sub!;
            }
            return session;
        }
    }

}