'use client'

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ThreadCardProfile from './ThreadCardProfile'
import { useSession } from 'next-auth/react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation'

const profileCard = ({ image, name }) => {

    const { data: session } = useSession()
    const [threads, setThreads] = useState([])
    const router = useRouter()

    useEffect(() => {
        const getThread = async () => {
            try {
                console.log(session?.user.id)
                const response = await fetch(`/api/threads/me/${session?.user.id}`)
                const data = await response.json();
                console.log(data)
                setThreads(data)

            } catch (error) {
                console.log(error)
            }
        }
        getThread()
    }, [])

    // Calling api for thread 
    const [title, setTitle] = useState('')

    const handleThread = async (e) => {
        e.preventDefault();
        try {

            await fetch('/api/threads/new', {
                method: 'post', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    title: title,
                    userId: session?.user.id
                })
            }).then(res => {
                if (res.ok) {
                    setOpen(false)
                    router.push(`/profile`)
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    // Material ui things 

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: '#00040f',
                paper: '#00040f'
            },
        },

    });




    return (
        <>

            <section className='w-full min-h-screen bg-primary flex-col '>
                <div className="profile_img top w-full h-[40%] ">
                </div>


                {/* profile section */}
                <div className="  mx-auto px-4 pt-[100px]  ">
                    <div className=" relative flex flex-col min-w-0 break-words bg-primary w-full  shadow-xl rounded-lg border-[0.2px] ">
                        {/* gradient start */}
                        <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
                        <div className="absolute z-[0] w-[80%] h-[80%] rounded-full blue__gradient bottom-40" />
                        <div className="absolute z-[0] w-[20%] h-[50%] right-20 bottom-20 pink__gradient" />
                        {/* gradient end */}
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="">
                                        <Image
                                            alt="Profile"
                                            width={100}
                                            height={100}
                                            loader={() => image}
                                            src={image}
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button onClick={handleClickOpen} className="bg-blue-500 dark:bg-blue-600 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
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
                                    {name.slice(0, 5)}.weilders.In
                                </div>
                                <div className="mb-2 text-white dark:text-white mt-10">
                                    <FontAwesomeIcon icon={faBriefcase} className='mr-2 text-lg text-white' /> Joined Weilder at any good day!
                                </div>
                                <div className="mb-2 text-white dark:text-white">
                                    <i className="fas fa-university mr-2 text-lg text-white dark:text-white"></i>Living in Weilders world
                                </div>
                            </div>

                            {/* <Threads></Threads> */}
                            <div className="thread_profile mt-6 border-t-[0.2px] py-4 flex-col ">
                                {threads.map((post) =>
                                    <>
                                        <ThreadCardProfile title={post.title} link={post._id} image={session?.user && session?.user.image} like={post.likes} comment={post.comment} createdAt={post.createdAt} />)
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <ThemeProvider theme={darkTheme}>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className='text-[30px] mb-8 text-white mx-auto font-poppins'>Create thread</DialogTitle>
                    <DialogContent className=' mb-4  md:w-[500px] w-[300px]'>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Enter Your Thread"
                            type="text"
                            fullWidth
                            variant="standard"
                            multiline
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='text-white font-poppins placeholder:font-poppins'
                        />
                    </DialogContent>
                    <DialogActions className='mb-2'>
                        <Button className='text-white font-poppins bg-red-400' variant='outlined' color="error" onClick={handleClose} >Cancel</Button>
                        <Button type='submit' className='text-white font-poppins bg-blue-500' variant='contained' color="success" onClick={handleThread} >Create</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>

        </>
    )
}

export default profileCard