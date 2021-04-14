const isEmpty = require("is-empty")
const Validator = require("validator")

module.exports = function validateSearchValue(data) {
  let errors = {}

  data.searchValue = !isEmpty(data.searchValue) ? data.searchValue : ""

  if (Validator.isEmpty(data.searchValue)) {
    errors.searchValue = "Search value is required"
  }

  return { errors: errors, isValid: isEmpty(errors) }
}
