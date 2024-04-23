import React from 'react'
import MyForm from './MyForm'

const Ticket = () => {
  return (
    <div className="bg-gradient-to-r text-center from-orange-500 to-purple-600 h-full w-full min-h-[500px]">
       <div className='text-5xl pt-10 font-bold'>Get Notified When Registration is Open!</div>
       <div className='text-xl pt-10'>Enter your details below to be notified once registration has opened.</div>
        <div className='flex justify-center items-center text-start'>
          <MyForm/>
        </div>

    </div>
  )
}

export default Ticket