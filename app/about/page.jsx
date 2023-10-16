import React from 'react'
import Team from './Team'
import data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const metadata = {
  title: `Weilder's About`,
  description : `Know about our team and about weilder's work in IT.`
}



const page = () => {
  return (

    <>
      <div className="about_page">
        <div className="about_card">
           {data.map(e => {
              return <div key={e.index} className='card'>
        
                <FontAwesomeIcon icon={e.icon}  size='3px' beat fade/>
             <h2>{e.name}</h2>
             <p>{e.description}</p>
         </div>
           })}
        </div>
        <Team/>
      </div>
    </>

  )
}

export default page