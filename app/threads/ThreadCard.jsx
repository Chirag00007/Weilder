import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpFromBracket, faChartSimple, faHeart as redHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ThreadCard = ({ id, title, createdBy, image, like, comment, views, createdAt }) => {

  const createdDate = new Date(createdAt);

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

  const { data: session } = useSession();
  const [liked, setLiked] = useState(false);


  const handleLike = async () => {
    try {
      await fetch(`/api/threads/like/${id}`, {
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


    useEffect(() => {

      const checkUserLike = async () => {
        try {
          const response = await fetch(`/api/threads/hasLike/${id}/user/${session?.user.id}`);


          if (response.status === 200) {
            setLiked(true);
          } else {
           setLiked(false)
          }
        } catch (error) {
          console.error('Error checking if user has liked thread:', error);
        }
      };

      checkUserLike();

    }, [id, session]);
  

  return (
    <>
      {/* Css in article css  */}
      <div key={id} className="threadCard px-2 relative ">

        <div className="thread_profile">
          <img src={image} alt={createdBy} />
          <h2>{createdBy}</h2> <span className='text-[10px] font-bold text-gray-400 ml-4'>{timeAgoMessage}</span>
        </div>
        <div className="thread_main py-2">
          <p> {title} </p>
        </div>
        <div className="thread_actions">
          <button onClick={handleLike}> <FontAwesomeIcon icon={liked ? redHeart : faHeart} className={`${liked ? 'text-red-400' : 'text-gray-200'}`} /><span className='ml-[4px]'> {like}</span> </button>
          <Link href='/'> <FontAwesomeIcon icon={faComment} /> <span className='ml-[4px]'> {comment.length}</span> </Link>
          <button ><FontAwesomeIcon icon={faChartSimple} className='text-indigo-400' /></button>
          <button ><FontAwesomeIcon icon={faArrowUpFromBracket} className='text-blue-400' /></button>
        </div>
      </div>
    </>
  )
}

export default ThreadCard