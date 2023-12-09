import React from 'react'
import { useLocation } from 'react-router-dom'
import Coments from './Coments'

const NewsDetails = () => {

    const location = useLocation()
   
  return (
    <div className='grid grid-cols-2'>
    <div>
       <h1 className='font font-semibold text-2xl p-3 ml-2'>{location.state.data.title}</h1>
       <h4 className='ml-3  text-xl'>{location.state.data.description}</h4>
       <img className='ml-2' src={location.state.data.urlToImage}  />
     </div>
    <div>
        <Coments/>
    </div>
    </div>
  )
}

export default NewsDetails
