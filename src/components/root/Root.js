import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './Root.css';


function Root() {
  return (
    <div>
        <Navbar/>
        <div id='ot' style={{minHeight:'43em'}}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root