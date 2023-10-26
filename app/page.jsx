import Link from 'next/link'
import Image from 'next/image'
import styles from './style'
import Stats from '@/components/Client/Stats'
import About from '@/components/Client/About'
import Services from '@/components/Client/Services'
import Projects from '@/components/Client/Projects'
import Developer from '@/components/Client/Developer'
import CTA from '@/components/Client/CTA'
import Contact from '@/components/Client/Contact'


export default function Home() {

  return (
    <>
    {/* Home page section  */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>


          <section id="home" className={` flex md:flex-row flex-col  ${styles.paddingY} `}>

            {/* Left Home screen  */}

            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:text-start text-center`}>
              
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]  md:mx-[0.1px] mx-auto mb-4">
                <Image className="w-[32px] h-[32px]"  width={100} height={100} src={'/image/code.PNG'}></Image>
                <p className={`${styles.paragraph} ml-2 ss:text-[15px] text-[10px] font-poppins font-normal text-dimWhite leading-[30.8px]`}>
                  <span className="text-sky-400">Weilder's</span> don't code!{" "}
                  <span className="text-sky-400">Code</span> Decode Us!
                </p>
              </div>

              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[30px] text-white ss:leading-[70px] leading-[50px] ">
                  The Weilders <br className="md:block hidden" />{" "}
                  <span className="text-gradient">GenZ Web &</span>{" "}
                </h1>
              </div>

              <h1 className="font-poppins font-semibold ss:text-[50px] text-[30px] text-white ss:leading-[70px] leading-[50px] w-full">
                Mobile Services
              </h1>

              <p className={`${styles.paragraph} max-w-[470px] mt-5 md:mx-[0.1px] mx-auto  `}>
                Our team provide services of creating a next generation, web and mobile application. We provide vast variety of services and create a interactive modern UI.
              </p>
              <Link href={'/services'} type="button" className={`py-2 mt-6 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none md:mx-[0.1px] mx-auto ${styles}`}>
                Explore Services
              </Link>
            </div>

            {/* Right home screen  */}

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
              {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
              <Image className='w-[100%] h-[100%] relative z-[5]' width={1000} height={1000} src={'/image/main.png'}></Image>

              {/* gradient start */}
              <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
              {/* gradient end */}
            </div>

          </section>
        </div>
      </div>

    {/* Starting about with stats */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <About/>
        <Services/>
        <Projects/>
        <Developer/>
        <CTA/>
        <Contact/>
        </div>
        </div>
    </>
  )
}
