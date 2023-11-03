'use client'

import { useEffect } from "react";
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpFromBracket, faChartSimple, faHeart as redHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SingleThread = () => {

    const [thread, setThread] = useState([])
    const [postComments, setPostComments] = useState([])
    const params = useParams();
    const router = useRouter()
    const [comment, setComment] = useState('')

    const { data: session } = useSession()

    useEffect(() => {

        const handleGet = async () => {
            const response = await fetch(`/api/threads/${params.id}`)
            const data = await response.json()

            setThread(data);
            setPostComments(data.comments)

        }
        if (params?.id) return handleGet();

    }, [params.id])

    // post comments 

    const handleComment = async () => {
        try {
            const response = await fetch(`/api/threads/comment/new/${params?.id}`, {
                method: 'post', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    comment,
                    userId: session?.user.id
                })
            })
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    }


    // Date setting 
    const createdDate = new Date(thread.createdAt);

    // Get the current time
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - createdDate;

    // Define variables to store the time difference in different units
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(monthsAgo / 12);

    // Create a variable to hold the time ago message
    let timeAgoMessage;

    if (yearsAgo > 0) {
        timeAgoMessage = `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`;
    } else if (monthsAgo > 0) {
        timeAgoMessage = `${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`;
    } else if (daysAgo > 0) {
        timeAgoMessage = `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
    } else if (hoursAgo > 0) {
        timeAgoMessage = `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
    } else if (minutesAgo > 0) {
        timeAgoMessage = `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
    } else {
        timeAgoMessage = `${secondsAgo} second${secondsAgo === 1 ? '' : 's'} ago`;
    }

    return (
        <>
            {thread && thread.createdBy ? <>
                <div className="threadCard px-2 relative ">

                    <div className="thread_profile">

                        <img src={thread.createdBy.image} alt={thread.createdBy.name} />
                        <h2>{thread.createdBy.name}</h2> <span className='text-[10px] font-bold text-gray-400 ml-4'>{timeAgoMessage}</span>
                    </div>

                    <div className="thread_main py-2">
                        <p> {thread.title} </p>
                    </div>
                    <div className="thread_actions">
                        <button> <FontAwesomeIcon icon={'liked' ? redHeart : faHeart} className={`${'liked' ? 'text-red-400' : 'text-gray-200'}`} /><span className='ml-[4px]'> {thread.likes.length} </span> </button>
                        <button ><FontAwesomeIcon icon={faChartSimple} className='text-indigo-400' /><span className='ml-[4px]'> {thread.views}</span> </button>
                        <button  ><FontAwesomeIcon icon={faArrowUpFromBracket} className='text-blue-400' /></button>
                    </div>
                </div>
                <div className="comment_thread">
                    <div className="post">
                        <input type="text" aria-multiline placeholder="Comment on thread!" value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button onClick={handleComment} className="bg-blue-500 text-white mx-0 ">Send</button>
                    </div>
                    <div className="all_comments">

                        {
                            postComments && postComments.length === 0 ? <p className="text-white">no comments</p> :
                                <>
                                    {postComments.map((e) =>
                                        <div className="user_comment">
                                            <div>
                                                <Image src={e.author.image} width={100} height={100} alt={e.author.name}/>
                                                <h1 >{e.author.name}</h1>
                                            </div>
                                            <p >{e.comment}</p>
                                        </div>
                                    )}
                                </>
                        }

                    </div>
                </div>
            </> : 'Loading your docx'}
        </>
    )
}

export default SingleThread