import React from 'react'
import bannerImg from '../assets/bannerimg.png'

const Banner1 = () => {
  return (
    <div className='realtive min-h-[250px] border-b border-neutral-800  '>
        <div className=' m-10 md:mx-20 lg:mx-52 transition  ease-in-out delay-150 hover:-translate-xy-2 hover:scale-110 duration-300 ...'>
            <div className='flex flex-row justify-center items-center border border-violet-500 rounded-lg '>
                <div className=''>
                    <img className='h-[20rem] w-[] ' src={bannerImg} alt="" />
                </div>
                <div className='text-center '>
                    <h3 className='text-5xl max-w-5xl mx-auto sm:text-5xl lg:text-6xl  lg:mt-20 tracking-wider'>G<span className='bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text'>AI</span>S</h3>
                  <h5 className='m-2'>Unifying the world AI
                    community</h5>
                </div>
            
            </div>
        </div>
       
    </div>
  )
}

export default Banner1