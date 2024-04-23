import React from 'react'


const Card = ({imgUrl,desc,head}) => {
  return (
    <div className="mt-5 flex h-full w-full ">
        <div className='md:text-2xl text-xl text-neutral-50 font-bold w-1/3'>{head}</div>
        <div className='md:text-lg text-base text-neutral-300 ps-2 w-2/3'>{desc}</div>
    </div>
  
  )
}

export default Card