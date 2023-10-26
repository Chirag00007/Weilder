"use client"

import Image from "next/image"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const login = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();

    if(session?.user) {
     return redirect('/')
    }
  }, [session, redirect]);


  return (
    <div className="bg-primary w-full min-h-[70vh] flex items-center justify-center relative">
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

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
    </div>
  )
}

export default login