import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import SideNav from './components/SideNav';


function App() {
  return (
    <Router>
      <Header />
      <SideNav>
      </SideNav>
    </Router>
  );
}

export default App;
