import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Google from './components/Google';
import Amazon from './components/Amazon';

function App() {
  //Set state for all fetch calls
  // const [statusData, setStatusData] = useState(null);
  const [googleData, setGoogleData] = useState(null);
  const [amazonData, setAmazonData] = useState(null);

  //Fetch data from each endpoint
  //   useEffect(() => {
  //   fetch("/v1/all-status")
  //     .then((res) => res.json())
  //     .then((statusData) => setStatusData(statusData));
  // }, []);

  useEffect(() => {
    fetch("/v1/google-status")
      .then((res) => res.json())
      .then((googleData) => setGoogleData(googleData));
  }, []);

  useEffect(() => {
    fetch("/v1/amazon-status")
      .then((res) => res.json())
      .then((amazonData) => setAmazonData(amazonData));
  }, []);

  return (
    <Router>
    <main>
      <section>
        <header>
        <nav className="nav-bar">
          <li><Link to={'/v1/all-status'}>Status List</Link></li>
          <li><Link to={'/v1/google-status'}>Google Status</Link></li>
          <li><Link to={'/v1/amazon-status'}>Amazon Status</Link></li>
        </nav>
        </header>
        <Routes>
          <Route path='/v1/all-status' element={<Home />}/>
          <Route path='/v1/google-status' element={<Google googleData={googleData} />}/>
          <Route path='/v1/amazon-status' element={<Amazon amazonData={amazonData} />}/>
        </Routes>
      </section>
    </main>
    </Router>
  );
}

export default App;
