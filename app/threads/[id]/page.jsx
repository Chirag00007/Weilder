'use client'

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id

  // fetch data
  const thread = await fetch(`/api/threads/${id}`).then((res) => res.json())
  const data = await thread.json();

  return {
    title: data.title,
  }
}


const page = ({ params }) => {

  useEffect(() => {

    const handleGet = async () => {
      // Writting single page code 
    }

  }, [])




  return (
    <>
      <div className={`bg-primary w-[100%] overflow-hidden min-h-[50vh]  `}>

        <div className="singleThread_container w-[400px] border-x-[0.4px] h-full">

        </div>
      </div>
    </>
  )
}

export default page