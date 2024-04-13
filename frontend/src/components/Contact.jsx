import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import MyForm from './MyForm';



const Contact = () => {
  return (
    <div className=' pt-10 border-t border-neutral-800'>
        <div className="text-center">
        <span className='bg-neutral-900 text-orange-800 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
            Contact Us
        </span>
        <h2 className='text-3xl max-w-5xl mx-auto sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide'>Get in Touch</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center my-5 mx-auto ">
        <div className='md:w-1/3 md:text-start sm:w-full text-center  '>
            <h3 className='text-3xl font-semibold text-neutral-300'>Send us a message <span><TfiEmail className='inline fill-orange-600'/></span></h3>
            <p className=' md:w-3/4  pt-4 text-[1.1rem] text-neutral-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nostrum perspiciatis non obcaecati amet quasi eaque maxime vel aut eum.</p>
            <ul className='py-5 flex flex-col justify-center  '>
                <li className='text-[1rem] pb-1 text-neutral-300'><TfiEmail className='inline text-xl me-2 fill-blue-700'/> contact@gais.com</li>
                <li className='text-[1rem] pb-1 text-neutral-300'><BsFillTelephoneFill className='inline text-xl me-2 fill-blue-700'/> +1 390930 120990</li>
                <li className='text-[1rem] pb-1 text-neutral-300'><FaAddressCard className='inline text-xl me-2 fill-blue-700'/> 39 ,Delhi India </li>
            </ul>
        </div>
        <div className='flex items-center justify-center'>
        <MyForm/>
        </div>
        </div>
    </div>
  )
}

export default Contact