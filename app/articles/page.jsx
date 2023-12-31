import React from 'react'
import styles from '../style'
import ArticleCard from './ArticleCard'
import articles from './data'

export const metadata = {
    title : "Weilders - Articles ",
    description : "Read the articles to know more and get awared to the new technologies in world Of IT, to stay well in business."
}

const page = () => {
    return (
        <>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
                <div className={`${styles.boxWidth}`}>
                    <h2 className={`font-poppins font-semibold xs:text-[48px] text-[27px]  text-white xs:leading-[76.8px] leading-[50.8px] w-full  text-center mx-auto my-4`}>Articles</h2>
                    <div className="w-[90%] mx-auto flex items-center justify-between min-h-[40vh] flex-wrap">

                     {  articles.map((e) => {
                       return  <ArticleCard key={e.id} title={e.title} author={e.author} id={e.id} image={e.src} desc={e.desc} />
                     })
                     }

                    </div>

                </div>
            </div>
        </>
    )
}

export default page