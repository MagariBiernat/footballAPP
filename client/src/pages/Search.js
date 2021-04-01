import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {searchAction } from '../redux/actions/searchAction'
const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const { data } = useSelector( state => state.search)
  const dispatch = useDispatch()
  const API_KEY = process.env
  const handleSearch = () => {
    console.log(API_KEY)
    dispatch(searchAction(searchValue))
  }
  console.log(data)

  return ( 
    <div>Search
      <input type="text" onChange={(e) => setSearchValue(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
      {/* {data.length > 0 && data.map()} */}
    </div>
   );
}
 
export default Search;