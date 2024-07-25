import React from 'react'

const HeadCard = ({head, desc}) => {
  return (
    <div className='max-w-[400px] '>
        <div className="  bg-black bg-opacity-60 text-white shadow-lg  overflow-hidden p-6">
      <h2 className="text-yellow-500 text-4xl font-bold mb-4 tracking-wide ">{head}</h2>
      <p className="mb-4 text-3xl">
        {desc}
      </p>
    </div>
    </div>
  )
}

export default HeadCard