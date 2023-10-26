import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleCard = ({title, desc , author , image , id}) => {
    return (
        <>
            <div className="article_card rounded-xl m-[15px]  ">
                <div className="aImg">
                    <Image src={image} width={1000} height={1000} alt='web' />
                </div>
                <div className="aContent">
                    <h2 className='mt-2'>
                        {title}
                    </h2>
                    <p className='my-2 leading-[20px]'>{desc}</p>
                    <p className='text-end text-blue-400'> ~{author}</p>
                    <Link  className=' block mx-auto mt-2 rounded-lg text-center bg-blue-500 hover:bg-blue-700 read_more' href={`/articles/${id}`}>Read More</Link>
                </div>
            </div>
        </>
    )
}

export default ArticleCard