import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ScrollToTop from './ScrollToTop'

import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header/>
    <ScrollToTop/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout