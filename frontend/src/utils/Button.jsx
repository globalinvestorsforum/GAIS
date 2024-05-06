import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name, className, link}) => {
  return (
    <Link to={link} className={`bg-gradient-to-r my-8 from-orange-500 to-purple-600 text-center  md:w-40 sm:w-36 mx-0 py-2 px-3  font-semibold ${className} `}>
          {name}
        </Link>
  )
}

export default Button