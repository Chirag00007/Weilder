import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRollingEyes } from '@fortawesome/free-solid-svg-icons'
import Particles from '@/components/Client/Particles'

export default function NotFound() {
  return ( 
    <>
      <div style={{zIndex : '0'}} className="w-full min-h-[90vh] flex items-center justify-center bg-primary relative">
      
        <div style={{ zIndex: '4' }} className="main flex-col items-center justify-center text-center">
          <FontAwesomeIcon icon={faFaceRollingEyes} className='xs:text-[48px] text-[30px] mx-auto  bg-indigo-400 p-5 rounded-full text-center text-white' />
          <h1 style={{fontWeight : '600'}} className='text-center py-4 text-white text-[30px] '>Lost in eyes? Page not found!</h1>
          <Link className='bg-indigo-500 hover:bg-indigo-700 text-white text-[15px] py-2 px-6 rounded-lg' href={'/'}>Go back</Link>
        </div>

        {/* gradient  */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
        <div className="absolute z-[0] w-[40%] h-[80%] rounded-full pink__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div >
    </>
  )
}