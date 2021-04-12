import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { searchAction } from "../redux/actions/searchAction"

const Search = () => {
  const [searchValue, setSearchValue] = useState("")
  const { data } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(searchAction(searchValue))
  }
  console.log(data)

  return (
    <div>
      <h2>Search</h2>
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {/* {data.length > 0 && data.map()} */}
    </div>
  )
}

export default Search
