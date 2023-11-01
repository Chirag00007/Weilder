import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function GET(request , {params}) {
    
    try {
        await connectDB();
        const thread = await Thread.find({ createdBy: params.id }).populate('createdBy')

        return new Response(JSON.stringify(thread), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}

