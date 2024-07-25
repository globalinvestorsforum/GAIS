import React from 'react'

const SubCard = ({img, para1, para2, order, style}) => {
  return (
    <div className='flex flex-wrap justify- items-center pb-5'>
        <div className={`w-1/2 flex justify-${style} items-center h-[300px] overflow-hidden order-${order}`}>
            <img src={img} className='w-[80%] ' alt="" />
        </div>
        <div className='text-neutral-900 w-1/2 text-xl '>
            <p>{para1}</p>
            <p className='pt-6'>{para2}</p>
        </div>
    </div>
  )
}

export default SubCard