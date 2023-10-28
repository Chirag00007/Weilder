import styles from "@/app/style";
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-primary px-4 pb-[60px]`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="md:flex-[1] flex-[0] flex flex-col justify-start mr-10 md:mx-[0.1px] mx-[50px] ">
                <div className="logo">
                    <Link className="text-[48px]" href={"/"}> Weilders </Link>
                </div>
                <p className={`${styles.paragraph} ml-6 mt-4 max-w-[312px]`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>

            <div className="md:flex-[1.5] flex-[0] w-full flex flex-row md:justify-start justify-center flex-wrap md:mt-0 mt-10">

                <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                        Menus
                    </h4>
                    <div className=" mt-4 flex-col flex">
                        <Link href={'/'} className={`w-full my-1 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3"                 }`}
                        >
                            Home
                        </Link>
                        <Link href={'/contact'} className={`w-full my-1 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3"                 }`}
                        >
                            Contact Us
                        </Link>
                        <Link href={'/articles'} className={`w-full my-1 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3"                 }`}
                        >
                            Blogs
                        </Link>
                    </div>
                </div>
                <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                        Blogs
                    </h4>
                    <div className=" mt-4 flex-col flex">
                        <Link href={'/articles/1'} className={`w-full my-1 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3"                 }`}
                        >
                            Developement
                        </Link>
                        <Link href={'/policy'} className={`w-full my-1 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3"                 }`}
                        >
                            Policy
                        </Link>
                        <Link href={'/referEarn'} className={`w- my-1 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3"                 }`}
                        >
                            Refer and Earn
                        </Link>
                        <Link href={'/joinTeam'} className={`w-full my-1 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3"                 }`}
                        >
                            Join Team
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Not Copyright Ⓒ 2023 Weilders. All Rights Reserved.
            </p>

            <div className="flex flex-row md:mt-0 mt-6 ">
          
                <Link href={''}> <FontAwesomeIcon icon={faLinkedin} className={`text-[20px] object-contain cursor-pointer mx-3 text-blue-400 hover:text-blue-600`} /></Link>
                <Link href={''}> <FontAwesomeIcon icon={faGithub} className={`text-[20px] object-contain cursor-pointer mx-3 text-blue-400 hover:text-blue-600`} /></Link>
                <Link href={''}> <FontAwesomeIcon icon={faInstagram} className={`text-[20px] object-contain cursor-pointer mx-3 text-blue-400 hover:text-blue-600`} /></Link>
                <Link href={''}> <FontAwesomeIcon icon={faWhatsapp} className={`text-[20px] object-contain cursor-pointer mx-3 text-blue-400 hover:text-blue-600`} /></Link>

            </div>
        </div>
    </section>
);

export default Footer;
