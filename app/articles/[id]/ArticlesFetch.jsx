'use client'

import Image from 'next/image';
import { useParams } from 'next/navigation';
import articles from '../data'



const ArticlesFetch = () => {
    const params = useParams()

    const article = articles[params.id -1];

    return (
        <div key={article.id} className="container mx-auto py-6">
            <article className="prose  lg:prose-xl">
                <h1 className="text-3xl lg:text-4xl text-white font-semibold text-center mt-8">{article.title}</h1>
                <p className="text-gray-500 py-5 text-center ">By {article.author} - {article.date}</p>
                <div className="w-full max-h-[300px] flex items-center justify-center overflow-hidden">
                    <Image src={article.src} width={1000} height={1000} className='w-[100%]' />
                </div>
                <div
                    className="text-gray-300"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </article>
        </div>
    )
}

export default ArticlesFetch