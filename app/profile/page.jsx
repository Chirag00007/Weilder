'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {

    const { data: session } = useSession();
    const user = session?.user;
    const router = useRouter()

    useEffect(() => {
        if (!session?.user) {
            // router.push('/auth')
        }
    }, [])


    return (
        <>
            <div className="w-full bg-primary flex items-center justify-center min-h-screen">
                <div style={{zIndex : '2'}} className="profile_box">
                    <div className="top_box justify-between">

                        <div className='main_info'>
                            <img src={session?.user.image} width={100} height={100} className='mx-auto my-2' />
                            <div>
                                <h1 className='text-center text-white text-[30px] text-bold mx-3'> {session?.user && user.name}</h1>
                                <p className='text-center text-gray-400 mx-3 '>@{session?.user.name.substring(0, 5).toLowerCase()}.weilder </p>
                            </div>
                        </div>

                        <div className="thread_info">
                            <div className="w-[100px] h-[100px] border-[0.1px] flex items-center justify-center p-2 flex-col border-gray-500 rounded-xl">
                                <h1 className='text-[25px] text-white text-center'>2</h1>
                                <p className='text-gray-400 text-[12px]'>Threads </p>
                            </div>
                            <div className="button_pfp">
                                <Link href={'/createThread'} className='bg-blue-500 hover:bg-blue-700 px-6 py-2 text-white rounded-md my-2 w-[150px] text-[12px] text-center'>Create Thread</Link>
                                <Link href='/joinTeam' className='bg-orange-400 hover:bg-orange-600 px-7 py-2 text-white rounded-md my-2 w-[150px] text-[12px] text-center'>Join Team</Link>
                            </div>
                        </div>

                    </div>


                    <div className="threads_box">
                        <h1 className="text-white text-[30px] mx-auto ">
                            Threads
                        </h1>
                        <div className='thread_cont '>

                            <div className="thread_cards">
                                <p className='text-[10px] text-white'>Adding feature soon!</p>
                            </div>
                            <div className="thread_cards">
                                <p className='text-[10px] text-white'>Adding feature soon!</p>

                            </div>
                            <div className="thread_cards">
                                <p className='text-[10px] text-white'>Adding feature soon!</p>
                            </div>
                            <div className="thread_cards">
                                <p className='text-[10px] text-white'>Adding feature soon!</p>

                            </div>


                        </div>
                    </div>
                </div>
                   {/* gradient start */}
              <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full pink__gradient bottom-40" />
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
              {/* gradient end */}
            </div>
        </>
    )
}

export default page