import styles, { layout } from "@/app/style"
import Image from 'next/image'

const service = [
    {
        id: 1,
        title: "Website Developement",
        content: "We provide web solutions with trending tech stacks like MERN, Next.js, and PHP, ensuring optimal performance and functionality.",
        image: "/image/website.png"
    },
    {
        id: 3,
        title: "Andriod Development",
        content: "Our expertise lies in Android app development, utilizing technologies like Flutter and React Native for clients.",
        image: "/image/application.png"
    },
    {
        id: 4,
        title: "Software Developement",
        content: "We specialize in Java, Spring Boot, and Python for software development, catering to diverse project needs.",
        image: "/image/soft.png"
    },
    {
        id: 5,
        title: "AI Development",
        content: "We're at the forefront of AI, streamlining workloads and integrating OpenAI APIs for intelligent website solutions.",
        image: "/image/algorithm.png"
    },
    {
        id: 6,
        title: "Blockchain",
        content: "Ensuring data security, we're delving into blockchain development, offering a secure and private data storage solution.",
        image: "/image/blockchain.png"
    },
    {
        id: 7,
        title: "Web3 Development",
        content: "Embrace the future with our Web3 and blockchain services, staying ahead of industry trends and innovations for web and blockchain projects.",
        image: "/image/web.png"
    },
]

const Services = () => {
    return (
        <section id="services" className={`${styles.paddingY} flex flex-col justify-center items-center`}>
            <h2 className={`font-poppins font-semibold xs:text-[48px] text-[27px]  text-white xs:leading-[76.8px] leading-[50.8px] w-full  text-center mx-auto my-4`}>Our Services</h2>
            <div className={`service_box w-[100%] mx-auto xs:mt-[40px] mt-[20px]`}>

                <div className="card_box">

                    {
                        service.map((e) => {
                            return <>
                                <div className="service_card border-[0.3px] border-solid border-gray-500 " key={e.id}>
                                    <div className="img_box">
                                        <Image width='100' height='100' src={e.image}></Image>
                                    </div>
                                    <div className="txt_box">
                                        <h4 className='font-poppins font-semibold text-white xs:text-[18px] text-[14px] leading-[18x] mb-2'>{e.title}</h4>
                                        <p className='font-poppins font-thin  text-dimWhite xs:text-[12px] text-[10px] leading-[18px]'>{e.content}</p>
                                    </div>
                                </div>
                            </>
                        })
                    }


                </div>
                <div className="card_box">

                    {
                        service.map((e) => {
                            return <>
                                <div className="service_card  border-solid border-gray-500 border-[0.3px] " key={e.id}>
                                    <div className="img_box">
                                        <Image width='100' height='100' src={e.image}></Image>
                                    </div>
                                    <div className="txt_box">
                                        <h4 className='font-poppins font-semibold text-white xs:text-[18px] text-[14px] leading-[18x] mb-2'>{e.title}</h4>
                                        <p className='font-poppins font-thin  text-dimWhite xs:text-[12px] text-[10px] leading-[18px]'>{e.content}</p>
                                    </div>
                                </div>
                            </>
                        })
                    }


                </div>
             
            </div>
        </section>
    )
}

export default Services