import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function GET(request, { params }) {
    try {
        await connectDB();

        const thread = await Thread.findById(params.id);

        if (!thread) {
            return new Response("Thread not found!", { status: 404 })
        }

        const hasLiked = thread.likes.includes(params.userId);

        if(!hasLiked) {
            return new Response(hasLiked === false , {status : 201})
        }

        return new Response(hasLiked, { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}

