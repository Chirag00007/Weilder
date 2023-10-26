import { sendEmail } from "@/components/Utils/sendEmail";


export const POST = async (request) =>  {
    const {name, email , subject, message } = await request.json();
    try {
        await sendEmail({name, email , subject , message})
        console.log({email , name,  subject , message})
        return new Response("Thanks for contacting us!", { status: 200 });
    } catch (error) {
        return new Response("Email not sended!", { status: 500 });
    }
}