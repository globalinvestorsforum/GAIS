import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { navItems } from '../../constants';
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo on the left */}
                    
                    <div className="flex items-center justify-start flex-shrink-0">
                        <Link to="/">
                        <img className="h-10 w-44 rounded-tr-xl rounded-bl-xl " src="https://www.global-investors-forum.com/GAIS/assets/images/gaislogo.png" alt="" />
                        </Link>
                    </div>

                    {/* Navigation links on the right */}
                    <div className="hidden lg:flex items-center justify-between w-1/2">
                        <ul className="flex space-x-12 uppercase">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.href} className="font-bold hover:text-purple-600">
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <Link to="/ticket" className="bg-gradient-to-r from-orange-500 to-purple-600 py-2 px-3 rounded-md ">
                            Get Tickets
                        </Link>
                    </div>

                    {/* Hamburger menu on the right in mobile view */}
                    <div className="lg:hidden flex items-center ">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <AiOutlineClose className="text-2xl absolute top-0 z-50 right-0 m-4" /> : <AiOutlineMenu className="text-2xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile drawer */}
                {mobileDrawerOpen && (
                    <div className="fixed top-0 right-0 z-20 bg-neutral-900 w-full p-10 flex flex-col justify-center items-center text-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li className="bg-neutral-900 py-1 text-base" key={index}>
                                    <NavLink className="bg-neutral-900 tracking-wider" to={item.href}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 m-5">
                            <Link to='/ticket' className="bg-gradient-to-r from-orange-700 to-purple-600 py-2 px-3 rounded-md">
                                Get Tickets
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
