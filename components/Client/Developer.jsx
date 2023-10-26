"use client"

import styles, { layout } from "@/app/style"
import Image from "next/image";
import Link from "next/link";


const developer = [
    {
        id : "1",
        content : "Full Stack web developer , Into web developement, Blockchain Developement and living life for javascript using chatGpt as intermediary.",
        name : "Tarun Devgan",
        img : '/image/dev/tarun.png',
        link : "https://www.linkedin.com/in/tarun-devgan-0b8013235/",
        linkTxt : "Contact Tarun"
    },
    {
        id : "2",
        content : "Java and javascript Enthuaist, Into WebDevelopement, Machine Learning, DSA, and android Developement. Create software and web/mobile applications.",
        name : "Chirag Vohra",
        img : '/image/dev/chirag.jpg',
        link : "https://www.linkedin.com/in/chirag-vohra-058a9a21a/",
        linkTxt : "Contact Chirag"
    },
    {
        id : "3",
        content : "Ai, Blockchain and Robotics Enthuaist, Into C+ , Embed C, Machine Algorithum, know well linux, window 11 and Flutter for android app or bot developement. In fun with leetcode.",
        name : "Amandeep singh",
        img : '/image/dev/aman.jpg',
        link : "https://www.linkedin.com/in/aman-deep-0b76a821b/",
        linkTxt : "Contact Aman"
    },
]

const DevCard = ({ content, name, link, img, linkTxt }) => (
    <div className="flex justify-between flex-col px-5 py-8 rounded-[20px]  max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-3  border-[0.1px] border-solid border-gray-500 hover:border-indigo-300 hover:cursor-pointer ">
      {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
      <p className="font-poppins font-normal text-[13px] leading-[25px] text-gray-200 my-10">
        {content}
      </p>
  
      <div className="flex flex-row items-center">
        <Image src={img} width={100} height={100} className="w-[40px] h-[40px] rounded-full"/>
        <div className="flex flex-col ml-4">
          
          <h4 className="font-poppins font-semibold text-[18px] leading-[32px] text-white">
            {name}
          </h4>
          <Link href={link} className="font-poppins font-normal text-[11px] mt-2 text-center p-1 rounded-xl bg-blue-400 text-white">
            {linkTxt}
          </Link>
        </div>
      </div>
    </div>
  );

const Developer = () => {
    return (
        <section id="team" className={`${styles.paddingY} flex flex-col justify-center items-center relative`}>
            <h2 className={`font-poppins font-semibold xs:text-[48px] text-[27px]  text-white xs:leading-[76.8px] leading-[50.8px] w-full  text-center mx-auto my-4`}>Our Developers</h2>

            <div className="w-[100%] overflow-hidden ">

                <div className="flex flex-wrap justify-center w-full items-center feedback-container relative z-[1]">
                    {developer.map((card) => <DevCard key={card.id} {...card} />)}
                </div>

            </div>

             {/* gradient start */}
             <div className="absolute z-[0] w-[20%] h-[25%] top-0 pink__gradient" />
              <div className="absolute z-[0] w-[60%] h-[60%] rounded-full white__gradient bottom-40" />
              <div className="absolute z-[0] w-[40%] h-[40%] right-20 bottom-20 pink__gradient" />
              {/* gradient end */}

        </section>
    )
}

export default Developer