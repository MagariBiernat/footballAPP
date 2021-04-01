import {GET_SEARCH, LOADING_SEARCH} from '../types'

import axios from 'axios'
const API_KEY = 'P8DZA7ZOWus8EHV5'

export const searchAction = (searchValue) => (dispatch) => {
  dispatch({type: LOADING_SEARCH})


  axios.get(`/player/search?api_key=${API_KEY}&name=${searchValue}`)
  .then( (response) => {
    if(response.status === 200) {
      console.log(response)
      // dispatch({type: GET_SEARCH, payload: response.})
    }
  })
  .catch( (err) => {
    console.warn(err)
  })
}