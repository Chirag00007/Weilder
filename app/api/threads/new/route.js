import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function POST(request) {
    const {title , userId} = await request.json()
    try {
        await connectDB()
        const thread = await Thread.create({title, createdBy : userId});

        return new Response('Thread Created!', thread , {status : 200})
    } catch (error) {
        return new Response(error , {status: 500})
    }
}

