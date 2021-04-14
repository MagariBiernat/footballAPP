require("dotenv").config()

const express = require("express")
const router = express.Router()
const API_KEY = process.env.API_KEY
const BASE_API_URL = process.env.BASE_API_URL
const validateSearchValue = require("../validators/validateSearchValue")

const Promise = require("bluebird")
const Request = Promise.promisifyAll(require("request"), { multiArgs: true })

/* // TODO: 
	! validate searchValue
	! create object(hashmap ?) with results
	! fetch -> footballers -> teams -> leagues
*/

router.get("", (req, res) => {
  const { errors, isValid } = validateSearchValue(req.body)

  const { searchValue } = req.body

  if (!isValid) {
    return res.status(400).json(errors)
  } else {
    const results = {}

    Request.getAsync(
      `${BASE_API_URL}player/search?api_key=${API_KEY}&name=${searchValue}`
    )
      .spread((response, body) => {
        results.footballers = JSON.parse(body.data)

        return Request.getAsync(
          `${BASE_API_URL}team/search?api_key=${API_KEY}&name=${searchValue}`
        )
      })
      .spread((response, body) => {
        results.teams = JSON.parse(body.data)

        return res.json(results)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })

    console.log("results = " + results)

    return res.json(results)
  }
})

module.exports = router
