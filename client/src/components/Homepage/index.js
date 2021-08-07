import React from 'react';
import Body from './Body/Body';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';



export default function Homepage(props) {
  return (
    <div>
    <Navbar {...props}/>
    <Body/>
    <Footer/>
    </div>
   
  )
}