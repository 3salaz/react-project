import React from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout =({children}) =>{
  return(
      <div className="layout_wrapper">
        <Navbar/>
        <main className="main_wrapper">{children}</main>
        <Footer/>
      </div>
  )
}

export default Layout;