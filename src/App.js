
import './App.css';
import {Switch,Route,Link, BrowserRouter, Routes} from 'react-router-dom'
import { Layout, Space, Typography } from 'antd';
import {Navbar} from './components'


function App() {
  return (
    
    <div className="app">
      
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route exact path="/exchanges"> 
              <Exchanges/>
            </Route>
            <Route exact path='/cryptourrencies'>
              <Cryptocurrencies/>
            </Route>
            <Route exact path='/crypto/:coinID'>
              <CryptoDetails/>
            </Route>
            <Route exact path='/news'>
              <News/>
            </Route>
          </Switch>
        </Layout>
      </div>

      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
