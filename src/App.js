import React from 'react';
import './App.css';
import {Switch,Route,Link, BrowserRouter, Routes} from 'react-router-dom'
import { Layout, Space, Typography } from 'antd';
import {Navbar, Exchanges,Homepage,CryptoDetails,Cryptocurrencies,News} from './components'


function App() {
  return (
    
    <div className="app">
      
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
              
            <Route exact path="/exchanges" element={<Exchanges/>}/> 
              
            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
              
            <Route exact path='/crypto/:coinID' element={<CryptoDetails/>}/>
              
            <Route exact path='/news' element={<News/>}/>
              
          </Routes>
        </Layout>

      <div className='footer'>
          <Typography.Title level={5} >
          
              <Link>All rights reserved Anuj Rana</Link>
            
          </Typography.Title>
      </div>
      </div>
    </div>
  );
}

export default App;
