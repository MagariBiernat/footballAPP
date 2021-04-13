import { GET_SEARCH, LOADING_SEARCH } from "../types"

import axios from "axios"
const API_KEY = process.env.REACT_APP_API_KEY

export const searchAction = (searchValue) => (dispatch) => {
  dispatch({ type: LOADING_SEARCH })

  fetch(`http://localhost:3010/api/football/${searchValue}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => console.log(error))

  // axios(`/player/search?api_key=${API_KEY}&name=${searchValue}`, {
  //   method: "GET",
  //   mode: "no-cors",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   withCredentials: true,
  //   credentials: "same-origin",
  // })
  //   .then((response) => {
  //     if (response.status === 200) {
  //       console.log(response)
  //       // dispatch({type: GET_SEARCH, payload: response.})
  //     }
  //   })
  //   .catch((err) => {
  //     console.warn(err)
  //   })
}
