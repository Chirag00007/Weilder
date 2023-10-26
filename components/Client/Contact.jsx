'use client'

import styles from '@/app/style'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'


const Contact = () => {

    const { data: session } = useSession()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (session?.user) {
            setEmail(session.user.email)
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/contact' , {
                method : 'POST',
                body : JSON.stringify({
                    name , email, subject , message, 
                })
            })
            console.log(response)

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <section id="contact" className={`${styles.paddingY} flex flex-col justify-center items-center`}>
            <h2 className={`font-poppins font-semibold xs:text-[48px] text-[27px]  text-white xs:leading-[76.8px] leading-[50.8px] w-full  text-center mx-auto my-4`}>Contact Us</h2>

            <form  className='relative flex flex-col xs:w-full w-[90%] mx-auto px-8 py-10'>
                <input required={true} style={{zIndex : '8'}} value={name}  onChange={(e) => setName(e.target.value)}  className='w-full py-2 px-8 text-white bg-transparent border-[0.1px] rounded-2xl border-gray-500 placeholder:text-grey-700 my-2' type="text" placeholder='Enter Your Name!' />

                {
                    session?.user ?
                        <>
                            <input  disabled className='w-full py-2 px-8 text-white bg-transparent border-[0.1px] rounded-2xl border-gray-500 placeholder:text-grey-700 my-2' type="email" name="email" id="" placeholder={`${session.user.email}`} />
                        </> :
                        <input required={true} style={{zIndex : '8'}} value={email}  onChange={(e) => setEmail(e.target.value)}  className='w-full py-2 px-8 text-white bg-transparent border-[0.1px] rounded-2xl border-gray-500 placeholder:text-grey-700 my-2' type="email" name="email" id="" placeholder='Your Email!' />

                }

                <input required={true} style={{zIndex : '8'}} value={subject} onChange={(e) => setSubject(e.target.value)} className='w-full py-2 px-8 text-white bg-transparent border-[0.1px] rounded-2xl border-gray-500 placeholder:text-grey-700 my-2 text-white' type="text" placeholder='Subject ' />
                <textarea required={true} style={{zIndex : '8'}} value={message}  onChange={(e) => setMessage(e.target.value)}  className='w-full py-2 px-8 text-white bg-transparent border-[0.1px] rounded-2xl border-gray-500 placeholder:text-grey-700 my-2' placeholder='...Message' name="" id="" cols="10" rows="6"></textarea>
                <button  disabled={name.length <= 1 || email.length <= 3 ||subject.length <= 5 ||message.length <= 5 ? true : false} type={'button'} onClick={handleSubmit} className={`py-2 px-6 font-poppins font-medium text-[18px] text-white bg-blue-500 rounded-[10px] outline-none my-2  disabled:bg-gray-400 ` }>
                    Get Started
                </button>

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </form>

        </section>
    )
}

export default Contact