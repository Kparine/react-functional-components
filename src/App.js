import React, { Component } from 'react';

import Chart from './Chart'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Content from './Content'

import './App.css';




function App (props) {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <Sidebar />
          </nav>
  
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

          <Content />

          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
