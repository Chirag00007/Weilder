import React from 'react'
import styles from '../style'
import Contact from '@/components/Client/Contact'

export const metadata = {
    title : 'Contact Weilders - Regarding any tech need!',
    description : "Drop email to us for any website or android app, we are hearing everyone, just mail us."
}
const page = () => {
    return (
        <>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Contact />
                </div>
            </div>

        </>
    )
}

export default page