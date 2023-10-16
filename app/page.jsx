import Link from 'next/link'
import Image from 'next/image'


export default function Home() {

  return (
    <>
     <div className="home_page">
      <div className="home_content"> 
      <div className="code_float" >
        <h4>           <Image src='/image/code.png' alt='Weilders' width={20} height={20}/> We <s> Built</s> Build Different - By Weilder's Mahapurush</h4>
      </div>   
        <h1>
          Think . Create . Be Weilder 
        </h1> 
        <p>Weilders is the team, providing IT services and providing different services with the knowledge of our team. Weilders does not end its work after proving you your project, we are providing SEO Optimization service for website and we do maintain sites and stay trendy with the designs.</p>
        <div className="home_button">
          <Link href='/about'> Explore</Link>
          <Link  className='contact_home_btn' href='/contact'> Contact</Link>
        </div>
       </div>

      <div className="image_home">
    <div>
    <Image src={'/image/idk.png'}  fill={true} alt='Weilders home' quality={100} priority={true} />
    </div>
      </div>
    </div>
    </>
  )
}
