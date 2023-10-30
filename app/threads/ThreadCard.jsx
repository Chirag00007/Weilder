import { faArrowUpFromBracket, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const ThreadCard = ({id, title , createdBy, image}) => {

  return (
    <>
      {/* Css in article css  */}
      <div key={id} className="threadCard px-2 ">
        <div className="thread_profile">
          <img src={image} alt={createdBy} />
          <h2>{createdBy}</h2>
        </div>
        <div className="thread_main py-2">
          <p> {title} </p>
        </div>
        <div className="thread_actions">
          <button> <FontAwesomeIcon icon={faHeart} className='text-gray-500' /> </button>
          <Link href='/'> <FontAwesomeIcon icon={faComment}  /> </Link>
          <button ><FontAwesomeIcon icon={faArrowUpFromBracket} className='text-blue-400'/></button>
        </div>
      </div>
    </>
  )
}

export default ThreadCard