import Services from "@/components/Client/Services"
import styles from "../style"
import Projects from "@/components/Client/Projects"


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