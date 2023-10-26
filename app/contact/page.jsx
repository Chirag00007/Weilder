import React from 'react'
import styles from '../style'
import Contact from '@/components/Client/Contact'

const page = () => {
    return (
    <>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                        <Contact/>
                </div>
                </div>

            </>
            )
}

            export default page