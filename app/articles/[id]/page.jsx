
import styles from '@/app/style';
import ArticlesFetch from './ArticlesFetch';


const page = () => {
  
    
    return (
        <>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                   <ArticlesFetch/>
                </div>
            </div>
        </>
    )
}

export default page