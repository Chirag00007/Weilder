import React , {Suspense} from 'react'

const page = () => {
  return (
    // <Suspense fallback={<Loader/>}>This is only used for better data fetching , to stop blocking full page for little content.</Suspense>
    <div>

      This is a normal react page component

    </div>
  )
}

export default page;

export const metadata = {
    title: `Weilder's Personel`,
  }