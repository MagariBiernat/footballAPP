require("dotenv").config()

const express = require("express")
const request = require("request")
const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/api/football/:searchValue", (req, res) => {
  const { searchValue } = req.params
  const API_KEY = process.env.API_KEY
  console.log(searchValue, API_KEY)
  request(
    {
      url: `http://api.isportsapi.com/sport/football/player/search?api_key=${API_KEY}&name=${searchValue}`,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message })
      }

      res.json(JSON.parse(body))
    }
  )
})

const PORT = process.env.PORT || 3010

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
