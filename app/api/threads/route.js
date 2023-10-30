import Thread from "@/models/threadsSchema";
import { connectDB } from "@/utils/db";


export async function GET({query}) {
    try {
        await connectDB();
        const page =   1; // Current page number
        const perPage = 10; // Number of items to return per page
        const skip = (page - 1) * perPage;

        const thread = await Thread.find().populate('createdBy' , ['name' , 'image']).skip(skip).limit(perPage);

        return new Response(JSON.stringify(thread), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}

