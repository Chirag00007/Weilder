'use client'

import React, { useEffect, useState } from 'react'
import ThreadCard from './ThreadCard';
import styles from '../style';

const page = () => {

    const [thread, setThread] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getThreads = async () => {
            const response = await fetch(`/api/threads`,{ cache : 'no-store'})
            const data = await response.json();
            console.log(data)
            setThread(data);
        }
        getThreads()

    }, [])


    return (
        <>
            <div className={`bg-primary  ${styles.flexCenter} flex-col  overflow-hidden`}>

                <div className="thread_container  mx-auto flex-col items-start justify-center py-[30px] relative">
                    {
                        thread.map((e) =>
                            <>
                                <ThreadCard id={e._id} title={e.title} createdBy={e.createdBy.name} image={e.createdBy.image} like={e.likes.length} comment={e.comments} views={e.views} createdAt={e.createdAt} />
                            </>
                        )
                    }
                    {/* gradient start */}
                    <div className="absolute z-[0] w-[40%] h-[35%] top-[20%] pink__gradient" />
                    <div className="absolute z-[0] w-[40%] h-[40%] rounded-full white__gradient bottom-40" />
                    <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                    {/* gradient end */}
                </div>
                {/* <div className='w-full py-12 '>
                    <div className="w-16 h-16 relative mx-auto">
                        <div className="absolute border-t-4 border-blue-700 border-solid rounded-full w-10 h-10 animate-spin"></div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default page