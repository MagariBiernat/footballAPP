import axios from 'axios';
import React from 'react';
import {useState} from 'react'

// const API_KEY = process.env.REACT_APP_API_KEY
// const API = `http://api.isportsapi.com/sport/football/league/basic?api_key=${API_KEY}`

 const Leagues = () => {

  const data ={
    prefixes: "league/basic"
  }

  // axios.post("/api/football", data).then((response) => console.log(response.data))



  const [leagues, setLeagues] = useState([]);

      const handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post("/api/football",data)
          .then(res => {
            console.log(res)
            console.log(res.data)
          })
      }



  return ( 
    <div>Leagues
      <h2>Search</h2>
      <form onSubmit={handleFormSubmit}>
      <input onChange={(e) => setLeagues(e.target.value)} value={leagues} type="text" />
      <button type="submit">Search</button>
      </form>
    </div>
   );
}

export default Leagues;
 