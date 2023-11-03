import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function GET(request, {params}) {
    try {
        await connectDB();
       

        const thread = await Thread.findById(params.id).populate('createdBy' , ['name' , 'image']).populate('comments.author' , ['name' , 'image'])
        if(!thread) {
            return new Response(`Can't find thred` , {status : 404})
        }

        return new Response(JSON.stringify(thread), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}

