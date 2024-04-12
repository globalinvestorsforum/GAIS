import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react'
import { navItems } from '../constants'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toogleNavbar = () =>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <nav className="ticky top-0 z-50 py-3  backdrop-blur-lg border-b border-neutral-700/800">
        <div className="container px-4 mx-auto relative text-sm ">
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-start flex-shrink-0">
                 <img className='h-10 w-[60%]' src="https://www.global-investors-forum.com/GAIS/assets/images/gaislogo.png" alt="" />
                </div>

                <div className=''>
                <ul className='hidden lg:flex  space-x-12 uppercase '>
                    {navItems.map((item, index) =>(
                        <li key={index}>
                            <a href={item.href} className='font-bold hover:text-purple-600 '  >{item.name}</a>
                        </li>
                    ) )}
                </ul>
                </div>
                
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="" className='bg-gradient-to-r from-orange-500 to-purple-600 py-2 px-3 rounded-md'>Get Tickets</a>
                </div>
                
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
              
                <button onClick={toogleNavbar}>
                    {mobileDrawerOpen ? <AiOutlineClose className='text-2xl'/> : <AiOutlineMenu className='text-2xl'/>}
                </button>
            </div>
            {mobileDrawerOpen &&(
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-10 flex flex-col justify-center items-center text-center  lg:hidden">
                    <ul >
                        {navItems   .map((item, index) =>(
                            <li className='bg-neutral-900 py-1 text-base'  key={index}>
                                <a className='bg-neutral-900 tracking-wider ' href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 m-5">
                        <a href="" className='bg-gradient-to-r from-orange-700 to-purple-600 py-2 px-3 rounded-md'>
                            Get Tickets
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar