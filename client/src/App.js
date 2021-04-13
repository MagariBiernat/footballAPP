import React from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import axios from "axios"

import Header from "./components/Header"
import Aside from "./components/Aside"

import Leagues from "./pages/Leagues"
import Teams from "./pages/Teams"
import Footballers from "./pages/Footballers"
import Search from "./pages/Search"

import "./style/mainPage/style.scss"

axios.defaults.baseURL = "http://localhost:3010"
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8"
axios.defaults.headers["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
function App() {
  return (
    <>
      <Router>
        <div className="main__page">
          <nav>
            <ul>
              <li>
                <Link to="/leagues">Leagues</Link>
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/footballers">Footballers</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
          <Header />
          <Aside />
          <div>
            <img src="../img/mainPageGraphics.png.png" alt="" />
          </div>

          <div>
            <Switch>
              {/* <Route path="/" exact component={App} /> */}
              <Route path="/Leagues" component={Leagues} />
              <Route path="/Teams" component={Teams} />
              <Route path="/Footballers" component={Footballers} />
              <Route path="/Search" component={Search} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
