import { connectDB } from "@/utils/db"
import User from "@/models/userSchema"
import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'


const handler = NextAuth({
    
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        })
    ],
  
    callbacks : {
        async session({session}){
            const sessionUser = await User.findOne({
                email : session.user.email
            })
            session.user.id = sessionUser._id.toString();
    
            return session;
        },
        async  signIn({profile}) {
            try {
              await connectDB()
    
                const userExists = await User.findOne({email : profile.email})
                if(!userExists) {
                    await User.create({
                        name : profile.name,
                        email : profile.email,
                        image : profile.picture
                    })
                }
    
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }

  })
  
  export { handler as GET, handler as POST }
