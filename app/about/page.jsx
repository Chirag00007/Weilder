import About from "@/components/Client/About"
import Developer from "@/components/Client/Developer"
import styles from "../style"


export const metadata = {
  title: `Weilder's About - Our Team`,
  description: `Know about our team and about weilder's work in IT. We provides solution of web application and mobile application, which helps to grow business more.`
}



const page = () => {
  return (

    <>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
        <Developer />
      </div>
      </div>
    </>

  )
}

export default page