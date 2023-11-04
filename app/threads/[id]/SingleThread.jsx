'use client'

import { useEffect } from "react";
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpFromBracket, faChartSimple, faHeart as redHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Loader from "@/components/Client/Loader";

const SingleThread = () => {

    const [thread, setThread] = useState([])
    const [postComments, setPostComments] = useState([])
    const params = useParams();
    const router = useRouter()
    const [comment, setComment] = useState('')
    const [liked, setLiked] = useState(false);
    const [open, setOpen] = useState(false)

    const { data: session } = useSession()

    useEffect(() => {
        // Get post 
        const handleGet = async () => {
            const response = await fetch(`/api/threads/${params.id}`)
            const data = await response.json()

            setThread(data);
            setPostComments(data.comments)

        }
        if (params?.id) handleGet();


    }, [params.id])

    // post comments 

    const handleComment = async () => {
        if (session?.user) {
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
        else {
            setOpen(true)
        }
    }

    // post likes and check if liked 


    // Like functionality 
    const handleLike = async () => {
        if (session?.user) {
            try {
                await fetch(`/api/threads/like/${params.id}`, {
                    method: 'post', headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({
                        userId: session?.user.id
                    })
                }).then(res => {
                    if (res.status === 200) {
                        setLiked(!liked)
                    }
                }
                )

            } catch (error) {
                console.log(error)
            }
        }
        else {
            setOpen(true)
        }
    }
    useEffect(() => {
        const checkUserLike = async () => {
            try {
                const response = await fetch(`/api/threads/hasLike/${params.id}/user/${session?.user.id}`);

                if (response.status === 200) {
                    setLiked(true);
                    console.log(response.status)
                } else {
                    setLiked(false)
                }
            } catch (error) {
                console.error('Error checking if user has liked thread:', error);
            }
        };

        if (session?.user) {
            checkUserLike();
        }
    }, [session]);

    // Auth for like
    const handleClose = () => {
        setOpen(false);
    };
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: '#00040f',
                paper: '#00040f'
            },
        },

    });

    const redirected = () => {
        router.push('/auth')
    }

    // handle share 
    const handleShare = async () => {
        if (navigator.share) {
            // Use the Web Share API for sharing
            try {
                await navigator.share({
                    title: 'Thread on Weilders',
                    text: 'This is title',
                    url: `/threads/${params.id}`, // Replace with the actual URL of your thread
                });
            } catch (error) {
                console.error('Share failed:', error);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            // You can provide alternative sharing options or copy the link
            alert('Web Share API is not supported in your browser. You can copy the link instead.');
        }
    };

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
                        <button onClick={handleLike}> <FontAwesomeIcon icon={liked ? redHeart : faHeart} className={`${liked ? 'text-red-400' : 'text-gray-200'}`} /><span className='ml-[4px]'> {thread.likes.length} </span> </button>
                        <button ><FontAwesomeIcon icon={faChartSimple} className='text-indigo-400' /><span className='ml-[4px]'> {thread.views}</span> </button>
                        <button onClick={handleShare}><FontAwesomeIcon icon={faArrowUpFromBracket} className='text-blue-400' /></button>
                    </div>
                </div>
                <div className="comment_thread">
                    <div className="post">
                        <input type="text" aria-multiline placeholder="Comment on thread!" value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button onClick={handleComment} className="bg-blue-500 text-white mx-0 ">Send</button>
                    </div>
                    <div className="all_comments">

                        {
                            postComments && postComments.length === 0 ? <div style={{border : '0.2px solid rgba(233, 229, 229, 0.26)'}} className="w-[100%] h-[100px] flex items-center justify-center ">
                                <p className="text-white text-[15px] " > No comments! </p>
                            </div> :
                                <>
                                    {postComments.map((e) =>
                                        <div className="user_comment">
                                            <div>
                                                <Image src={e.author.image} width={100} height={100} alt={e.author.name} />
                                                <h1 >{e.author.name}</h1>
                                            </div>
                                            <p >{e.comment}</p>
                                        </div>
                                    )}
                                </>
                        }

                    </div>
                </div>
            </> : <Loader />}

            <ThemeProvider theme={darkTheme}>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className='text-[25px] mb-8 text-white mx-auto text-center font-poppins  ss:w-[550px] w-[280px]'>Login in Weilders</DialogTitle>

                    <DialogActions className='mb-2'>
                        <Button className='text-white font-poppins bg-red-400' variant='outlined' color="error" onClick={handleClose} >Cancel</Button>
                        <Button onClick={redirected} type='submit' className='text-white font-poppins bg-blue-500' variant='contained' color="success"  >Login</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </>
    )
}

export default SingleThread