import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function POST(request, { params }) {
    const { userId } = await request.json()
    try {
        await connectDB()
        const thread = await Thread.findById(params.id);

        if (!thread) {
            return new Response("Thread not found!", { status: 404 })
        }

        if (thread.likes.includes(userId)) {
            thread.likes = thread.likes.filter((id) => id.toString() !== userId.toString());
            await thread.save();
            return new Response('Unliked thread!', { status: 201 })
        }

        thread.likes.push(userId);
        await thread.save();

        return new Response('Threads Created Succesfully', { status: 200 })
    } catch (error) {
        console.error(error);
        return new Response(error, { status: 500 })
    }


}