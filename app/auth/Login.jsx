"use client"

import Image from "next/image"
import { signIn, useSession, getProviders } from "next-auth/react"
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const Login = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();

        if (session?.user) {
            return redirect('/')
        }
    }, [session, redirect]);
    return (
        <>
            {providers &&
                Object.values(providers).map((provider) => (
                    <div className="  xs:w-[400px] w-[100%]  rounded-xl flex flex-col items-center justify-start p-3 z-[2]">
                        <h1 className='text-white md:text[30px] text-[20px] py-2 mb-6'>Authenticate </h1>

                        <div onClick={() => signIn(provider.id)} className="w-[90%] height-[50px] flex items-center justify-start bg-gray-900 p-2 rounded-2xl px-3 my-2 hover:bg-black cursor-pointer">
                            <Image className="w-[30px] h-[30px] overflow-hidden" src={'/image/google.png'} width={80} height={80} />
                            <span className="xs:text-[15px] text-[12px] text-white ml-[30px]">Authenticate Using Google</span>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Login