import React from 'react'
import {features} from '../../constants'


const Feature = () => {
  return (
    <div className='realtive mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className="text-center">
        <span className='bg-neutral-900 text-orange-800 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
            Feature
        </span>
        <h2 className='text-3xl max-w-5xl mx-auto sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>Conferences Tailored to 
        <span className='bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text '> Your Vision</span></h2>
        </div>
       
        <div className='flex flex-wrap mt-14 lg-mt-20 md:px-[8rem] lg:px-[9rem] sm: '>
            {features.map((feature,index)=>(
                <div key={index} className='w-full sm:1/1 lg:w-1/3'>
                    <div className="flex ">                     
                        <div className='m-5 '>
                        <div className="flex p-5 text-8xl justify-center items-center  ">
                            {feature.icon} 
                        </div>
                            <h5 className='mt-1 mb-6 text-xl md:text-left lg:text-left sm:text-center'>{feature.text}</h5>
                            <p className='text-md p-2  text-neutral-500'>{feature.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Feature