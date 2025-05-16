import React from 'react'
// import Header from './Header'
import Footer from './Footer'

import Navbar from './Navbar'

const LayOutHome = ({children}) => {
  return (
   
   <>
 <Navbar/>
   {children}
   <Footer/>
   </>
  )
}

export default LayOutHome
