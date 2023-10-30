import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect } from 'react'

const profileCard = ({ image , name, user}) => {

    useEffect(() => {
        const getThread = async () => {
            try {
                const thread = await fetch(`/api/threads/me`)
                console.log(thread)
            } catch (error) {
                console.log(error)
            }
        }
        getThread()
    }, [])
    
    return (
        <>

            <section className='w-full min-h-screen bg-primary flex-col '>
                <div className="profile_img top w-full h-[40%] ">
                </div>


                {/* profile section */}
                <div className="  mx-auto px-4 pt-[100px]  ">
                    <div className=" relative flex flex-col min-w-0 break-words bg-primary w-full mb-6 shadow-xl rounded-lg border-[0.2px] ">
                        {/* gradient start */}
                        <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
                        <div className="absolute z-[0] w-[80%] h-[80%] rounded-full blue__gradient bottom-40" />
                        <div className="absolute z-[0] w-[20%] h-[50%] right-20 bottom-20 pink__gradient" />
                        {/* gradient end */}
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="">
                                        <img
                                            alt="Profile"
                                            src={image}
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button className="bg-pink-500 dark:bg-pink-600 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                            Create Thread
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-white dark:text-white">3</span>
                                            <span className="text-sm text-white dark:text-white">Threads</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-white dark:text-white">
                                    {name}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-white dark:text-white"></i>
                                   {name.slice(0,5)}.weilders.In
                                </div>
                                <div className="mb-2 text-white dark:text-white mt-10">
                                    <FontAwesomeIcon icon={faBriefcase} className='mr-2 text-lg text-white'/> Joined Weilder at any good day!
                                </div>
                                <div className="mb-2 text-white dark:text-white">
                                    <i className="fas fa-university mr-2 text-lg text-white dark:text-white"></i>Living in Weilders world
                                </div>
                            </div>

                            {/* <Threads></Threads> */}
                            <div className="thread_profile mt-6 border-t-[0.2px] py-4 ">

                            </div>
                        </div>
                    </div>
                </div>
            
            </section>


        </>
    )
}

export default profileCard