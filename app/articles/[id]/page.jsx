import styles from '@/app/style';
import ArticlesFetch from './ArticlesFetch';
import articles from '../data'


// or Dynamic metadata
export async function generateMetadata({ params }) {
    const article = articles[params.id -1];
    return {
      title: article.title ,
      description : article.title + article.author + article.date
    }
  }


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