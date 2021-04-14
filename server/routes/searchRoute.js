require("dotenv").config()

const express = require("express")
const router = express.Router()
const API_KEY = process.env.API_KEY
const BASE_API_URL = process.env.BASE_API_URL
const validateSearchValue = require("../validators/validateSearchValue")

const Promise = require("bluebird")
const Request = Promise.promisifyAll(require("request"), { multiArgs: true })

router.get("/:searchValue", (req, res) => {
  const { errors, isValid } = validateSearchValue(req.params)

  const { searchValue } = req.params

  if (!isValid) {
    return res.status(400).json(errors)
  } else {
    let results = {}

    Request.getAsync(
      `${BASE_API_URL}player/search?api_key=${API_KEY}&name=${searchValue}`
    )
      .spread((response, body) => {
        results.footballers = JSON.parse(body).data

        return Request.getAsync(
          `${BASE_API_URL}team/search?api_key=${API_KEY}&name=${searchValue}`
        )
      })
      .spread((response, body) => {
        results.teams = JSON.parse(body).data
        return Request.getAsync(
          `${BASE_API_URL}league/basic?api_key=${API_KEY}`
        )
      })
      .spread((response, body) => {
        const { data } = JSON.parse(body)

        const resultsLeagues = data.filter((obj) => {
          return obj.name.includes(searchValue)
        })
        results.leagues = resultsLeagues

        return res.json(results)
      })
      .catch((err) => {
        return res.status(400).json(err)
      })
  }
})

module.exports = router
