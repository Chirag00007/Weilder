'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import ProfileCard from './ProfileCard';

const page = () => {

    const { data: session } = useSession();
    const user = session?.user
    const router = useRouter()

    useEffect(() => {
        if (!session?.user) {
            // router.push('/auth')
        }
    }, [])


    return (
        <>
            {
                session?.user && <ProfileCard user={user} image={session?.user && session?.user.image} name={session?.user && session?.user.name}/>
            }
        </>
    )
}

export default page