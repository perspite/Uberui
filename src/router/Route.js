import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import SideNav from '../components/SideNav';


const Route = () => {
  return (
    <Router>
      <Header />
      <SideNav />
    </Router>
  );
};

export default Route;