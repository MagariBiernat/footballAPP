import { GET_SEARCH, LOADING_SEARCH } from "../types"

import axios from "axios"
const API_KEY = process.env.REACT_APP_API_KEY

export const searchAction = (searchValue) => (dispatch) => {
  dispatch({ type: LOADING_SEARCH })

  const data = {
    prefixes: "player/search",
    searchPrefix: "name",
    searchValue: searchValue,
  }

  axios.post("/api/football", data).then((response) => console.log(response))
}
