import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function GET(request) {
    try {
        await connectDB();
        const thread = await Thread.find();

        return new Response(thread, { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}

