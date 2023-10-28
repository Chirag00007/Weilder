'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import React, { useRef } from 'react';

const Refer = () => {
    const { data: session } = useSession();

    const referCode = session?.user.name.slice(0, 5) + '.' + session?.user.email.slice(0, 1) + '.weilders'
    const inputRef = useRef(null);
    const copyCode = () => {
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand('copy');
        }

    }

    return (
        <>
            {
                session?.user ? <div className="refer_code w-[100%]  flex items-center justify-start mt-4">
                    <input ref={inputRef} readOnly className='text-[14px] [100%] bg-transparent border-[0.3px] outline-none px-6 py-2 text-white' type="text" name="code" id="code" value={referCode} />
                    <button onClick={copyCode} className='text-[14px] text-white p-2 bg-blue-400  px-4 py-2 border-[0.3px]'>Copy </button>
                </div>
                    :
                    <>
                        <div className='refer_code w-[100%]  flex items-center justify-start mt-4'>
                            <input ref={inputRef} readOnly className='text-[14px] [100%] bg-transparent border-[0.3px] outline-none px-6 py-2 text-white ' type="text" name="code" id="code" value={'Login to get code'} />
                            <Link href='/auth' className='text-[14px] text-white p-2 bg-blue-400  px-4 py-2 border-[0.3px]'>Login </Link>
                        </div>
                    </>


            }
        </>
    )
}

export default Refer