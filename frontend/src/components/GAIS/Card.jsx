import React from 'react'

const Card = ({imgUrl,desc,head}) => {
  return (
    <div className="mt-5 flex flex-col w-full   ">
    <div className="flex justify-center items-center">
      <img
        src={imgUrl}
        alt=""
        className="object-contain w-1/2 bg-transparent   h-[300px] rounded-t-xl "
      />
      <h4 className="sm:text-xl p-2 font-bold text-neutral-950">
        {head}
      </h4>
    </div>
    <div className="w-full p-4 text-wrap ">
      <p className="mt-2 text-lg text-neutral-900">
        {desc}
      </p>
    </div>
  </div>
  )
}

export default Card