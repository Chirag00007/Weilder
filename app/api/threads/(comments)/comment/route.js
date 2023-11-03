import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function GET(request , {params}) {
    try {
        const thread = await Thread.findById(params.id).populate('created')
    } catch (error) {
        
    }
}