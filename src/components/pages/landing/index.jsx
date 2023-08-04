import React from 'react';
import Navbar from '../../navbar';
import Footer from '../../Footer';
import Pic from '../../Pic';
import Login from '../../login';

import "./style.css";

const Landing = () => {
  return (
      <div className="landing-page">
        <Navbar />
        <div className="main-content">
          <Login/>
          <Pic/>
        </div>
        <Footer/>
      </div>
  );
};

export default Landing;
