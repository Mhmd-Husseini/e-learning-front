import React from 'react';
import Navbar from '../../navbar';
import Footer from '../../Footer';
import Login from '../../login';

import "./style.css";

const Landing = () => {

  return (
      <div className="landing-page">
        <Navbar one="Contact Us" two="About Us"/>
        <Login/>
        <Footer/>
      </div>
  );
};

export default Landing;
