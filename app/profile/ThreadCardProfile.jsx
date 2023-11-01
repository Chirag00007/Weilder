import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpFromBracket, faChartSimple, faHeart as redHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const ThreadCardProfile = ({link,  title, name, image, createdAt , comment , like}) => {
  return (
    <>
      <div key={link} className="threadCard px-2 relative ">

        <div className="thread_profile">
          <img src={image} alt={name} />
          <h2>{name}</h2> <span className='text-[10px] font-bold text-gray-400 ml-4'>{createdAt}</span>
        </div>
        <div className="thread_main py-2">
          <p> {title} </p>
        </div>
        <div className="thread_actions">
          <button > <FontAwesomeIcon icon={like.length === 1 ? redHeart : faHeart} className={`${like.length === 1 ? 'text-red-400' : 'text-gray-200'}`} /><span className='ml-[4px]'> {like}</span> </button>
          <Link href='/'> <FontAwesomeIcon icon={faComment} /> <span className='ml-[4px]'> 1</span> </Link>
          <button ><FontAwesomeIcon icon={faChartSimple} className='text-indigo-400' /></button>
          <button ><FontAwesomeIcon icon={faArrowUpFromBracket} className='text-blue-400' /></button>
        </div>
      </div>
    </>
  )
}

export default ThreadCardProfile