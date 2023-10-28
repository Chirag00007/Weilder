import Login from "./Login"

export const metadata = {
  title : 'Auhtenticate - Weilders'
}

const login = () => {

  return (
    <div className="bg-primary w-full min-h-[70vh] flex items-center justify-center relative">
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

        <Login/>
    </div>
  )
}

export default login