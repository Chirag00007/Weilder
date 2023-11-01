import Image from 'next/image'
import Link from 'next/link'

export const metaData = {
    title : `Know More about Developement - Weilder's Articles`,
    description : `Read the articles on web developement , android development, blockchain and web3. To understand more about today's trending technology and what is good for you!`
}

const ArticleCard = ({title, desc  , image , id}) => {
    return (
        <>
            <Link href={`/articles/${id}`} className="article_card  m-[15px]   shadow-lg cursor-pointer hover:translate-y-2 transition-all ">
                <div className="aImg rounded-xl overflow-hidden">
                    <Image src={image} width={1000} height={1000} alt='web' />
                </div>
                <div className="aContent">
                    <h2 className='mt-2'>
                        {title}
                    </h2>
                    <p className='my-2 leading-[20px]'>{desc} <Link className='ml-2 text-blue-400' href={`/articles/${id}`}>~ Read More</Link> </p> 
                </div>
            </Link>
        </>
    )
}

export default ArticleCard