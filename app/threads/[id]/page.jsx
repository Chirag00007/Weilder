import SingleThread from "./SingleThread"


export const metadata = {
  title : 'Weilders community'
}

const page = () => {


  return (
    <>
      <div className={`bg-primary w-[100%] overflow-hidden   flex justify-center `}>

        <div className="singleThread_container w-[400px]">

    {/* main card  */}

        <div className="single_thread">
          <SingleThread/>
        </div>
        </div>
      </div>
    </>
  )
}

export default page