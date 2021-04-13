require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const cors = require("cors")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ credentials: true, origin: true }))
app.options("*", cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

const API_KEY = process.env.API_KEY
const basicURL = "http://api.isportsapi.com/sport/football/"

app.post("/api/football", (req, res) => {
  const { prefixes, searchPrefix, searchValue } = req.body

  //validate

  request(
    {
      url: `${basicURL}${prefixes}?api_key=${API_KEY}&${searchPrefix}=${searchValue}`,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message })
      }
      res.json(JSON.parse(body))
    }
  )
})

app.get("/api/football/:searchValue", (req, res) => {
  const { searchValue } = req.params

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
