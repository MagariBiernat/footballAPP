import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header';
import Aside from './components/Aside';

import Leagues from './pages/Leagues'
import Teams from './pages/Teams'
import Footballers from './pages/Footballers'
import Search from './pages/Search'


import './style/mainPage/style.scss';

axios.defaults.baseURL = 'http://api.isportsapi.com/sport/football/'


function App() {
  return (
  <Router>
    <div className="main__page">
      <nav>
        <ul>
          <li> <NavLink to="/leagues">Leagues</NavLink></li>
          <li> <NavLink to="/teams">Teams</NavLink></li>
          <li> <NavLink to="/footballers">Footballers</NavLink></li>
          <li> <NavLink to="/search">Search</NavLink></li>
        </ul>
      </nav>
     <Header/>
     {/* <Aside/> */}
     {/* <div>
     <img src="../img/mainPageGraphics.png.png" alt=""/>
     </div> */}
    
    <Switch>
       <Route path="/" exact component={App}/>
       <Route path="/Leagues" component={Leagues}/>
       <Route path="/Teams" component={Teams}/>
       <Route path="/Footballers"component={Footballers}/>
       <Route path="/Search"component={Search}/>
    </Switch>

    </div>
    
  </Router>
  );
}

export default App;
