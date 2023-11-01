import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function GET(request, { params }) {
    try {
        const thread = await Thread.findById(params.id);
        if (!thread) {
            return new Response('Thread not found on this Id', { status: 404 });
        }

        thread.views++
        thread.save();
        return new Response('Added views', { status: 200 });
    } catch (error) {
        return new Response(error, { status: 500 });
    }
}