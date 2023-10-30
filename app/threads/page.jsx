'use client'

import React, { useEffect, useState } from 'react'
import ThreadCard from './ThreadCard';
import styles from '../style';

const page = () => {

    const [thread, setThread] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getThreads = async () => {
            const response = await fetch('/api/threads')
            const data = await response.json();
            console.log(data)
            setThread(data);
        }
        getThreads()

    }, [])


    return (
        <>
            <div className={`bg-primary sm:px-12 px-6 ${styles.flexCenter} flex-col`}>
                <div className="w-[100%]  mx-auto flex items-center justify-center py-[60px] flex-wrap relative">
                    {
                        thread.map((e) =>
                            <>
                                <ThreadCard id={e._id} title={e.title} createdBy={e.createdBy.name} image={e.createdBy.image} />
                            </>
                        )
                    }
                    {/* gradient start */}
                    <div className="absolute z-[0] w-[40%] h-[35%] top-[20%] pink__gradient" />
                    <div className="absolute z-[1] w-[40%] h-[40%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                    {/* gradient end */}
                </div>
                <div  className='w-full py-12 '>
                    <div className="w-16 h-16 relative mx-auto">
                        <div className="absolute border-t-4 border-blue-700 border-solid rounded-full w-10 h-10 animate-spin"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page