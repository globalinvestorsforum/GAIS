import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { ScrollRestoration } from 'react-router-dom'

import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout