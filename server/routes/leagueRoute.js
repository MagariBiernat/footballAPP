require("dotenv").config()

const express = require("express")
const router = express.Router()
const API_KEY = process.env.API_KEY
const BASE_API_URL = process.env.BASE_API_URL
const request = require("request")

router.get('/:param1', (req, res) => {
  const {
    param1
  } = req.params

  request({
    url: `${BASE_API_URL}league?api_key=${API_KEY}`
  }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: err.message })
    }
    
    const { data } = JSON.parse(body)

    const results = data.filter( obj => {
      return obj.name.includes(param1)
    })

    

    console.log(data[0])
    res.json({ data: results, length: results.length})
  })

})


module.exports = router