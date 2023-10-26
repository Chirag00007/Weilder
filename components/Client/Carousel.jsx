"use client"

import Image from 'next/image';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import Link from  'next/link'

const project = [
  {
    id: 1,
    image: '/image/project/book.jpg'
  },
  {
    id: 2,
    image: '/image/project/darship.jpg'
  },
  {
    id: 3,
    image: '/image/project/jim.jpg'
  },
  {
    id: 4,
    image: '/image/project/student.jpg'
  },
  {
    id: 5,
    image: '/image/project/weilder.jpg'
  },
  {
    id: 6,
    image: '/image/project/discount.jpg'
  },
]

const CarouselCont = () => {


  return (
    <ThemeProvider>
      <div className=' h-full overflow-none flex items-center justify-center mx-auto '>

        <Carousel autoplay={true} autoplayDelay={2000}  loop={true} className="rounded-xl w-[80%] mx-auto">
          {
            project.map((p) => {
              return <Link className='w-[100%] overflow-hidden flex items-center justify-center' key={p.id} href="">
                        <Image className='w-[100%] bg-cover'  src={p.image} width={1000} height={1000}/>
                    </Link>
            })
          }
        </Carousel>

      </div>
    </ThemeProvider>
  )
}

export default CarouselCont