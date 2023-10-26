import styles, { layout } from "@/app/style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPenToSquare, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import  Link  from 'next/link'

const features = [
    {
        id : 1,
        icons : faLaptopCode,
        title : 'Develop Applications',
        content : "We as weilder's develope both mobile and web applications using best trending tech stacks ."
    },
    {
        id : 2,
        icons : faPenToSquare,
        title : 'Application Maintanence',
        content : "We do handle the web and mobile applications of business, and keep renewing the UI, which fit to trends."
    },
    {
        id : 3,
        icons : faPersonChalkboard,
        title : 'Business Friendly',
        content : "We are not just here to develop, we provide advice for better site, through surveys and diffrent form."
    },
]


const FeatureCard = ({ icons, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card hover:cursor-pointer`}>
        <div className={`xs:w-[64px] xs:h-[64px] w-[40px] h-[40px]  rounded-full ${styles.flexCenter} bg-dimBlue my-auto `}>
            <FontAwesomeIcon icon={icons}  className=" w-[50%] h-[50%] object-contain text-blue-500 xs:text-[20px] text-[15px] "/>
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white xs:text-[18px] text-[14px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite xs:text-[16px] text-[12px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const About = () => (
    <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} md:text-start text-center`}>
                You focus on work, <br className="sm:block hidden" /> We maintain your application.
            </h2>
            <p className={`${styles.paragraph} max-w-[500px] mt-5 md:text-start text-center md:mx-[0.1px] mx-auto`}>
               Weilder's is the modern web solution provider team, which builds web and mobile application and providing solution to robotics. Know more about the our team.
            </p>

            <Link href='#team' type="button" className={`py-2 px-6 font-poppins font-medium xs:text-[18px] text-[15px] mt-[15px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}  md:mx-[0.1px] mx-auto`}>
               Our Team
            </Link>

        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
);

export default About;
