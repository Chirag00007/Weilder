import Services from "@/components/Client/Services"
import styles from "../style"
import Projects from "@/components/Client/Projects"

export const metadata = {
    title : "Services - Weilders",
    description : "Weilders provides services of it, which includes web application and mobile application. Want website, android app, web3 application, telegram bot. Just contact Us!"
}

const page = () => {
    return (
        <>
        
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Services/>
                    <Projects/>
                </div>
            </div>
        </>
    )
}

export default page