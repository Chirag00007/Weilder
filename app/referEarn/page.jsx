import Image from 'next/image'
import styles, { layout } from '../style'
import Refer from './Refer'


export const metadata = {
    title : 'Weilders - Earn Big 15% on Refer and earn',
    description : "Earn flat 15% on referring us, no long process, just refer and get amount, when they use our service and earn flat 15% of it. Big referal program is live."
}

const page = () => {


    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <section className={layout.section}>
                    <div className={layout.sectionInfo}>
                        <h2 className={styles.heading2}>
                            Earn through weilders  <br className="sm:block hidden" /> by referring us!
                        </h2>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Earn Flat 15% of commission on referring us. Tell your client to use your code while contacting us! and earn flat 15%.
                            <br />
                            Mail your UPI I'd on <span className='text-orange-400'> weilders.tech@gmail.com </span>
                        </p>
                        <Refer/>

                    </div>

                    <div className={layout.sectionImg}>
                        <Image className='w-[90%]' src={'/image/refer.png'} width={1000} height={1000} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page