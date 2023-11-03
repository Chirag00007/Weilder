import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function POST(request, { params }) {
    const { userId , comment } = await request.json()
    try {
        await connectDB()
        const thread = await Thread.findById(params.id);

        if (!thread) {
            return new Response("Thread not found!", { status: 404 })
        }

        const newComment = {
            comment: comment,
            author: userId
        }
        await thread.comments.push(newComment)
        // Save the updated thread
        await thread.save();

        return new Response("Thread comment added!", { status: 200 })

    } catch (error) {
        return new Response(error, { status: 500 })
    }
}