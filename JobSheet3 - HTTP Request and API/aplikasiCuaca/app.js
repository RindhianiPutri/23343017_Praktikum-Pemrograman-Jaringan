const request = require('postman-request')
const url ='http://api.weatherstack.com/current?access_key=bd5f2ec6c4c9038623ef1d64e63e366c&query=-0.8972176488507201,100.35069955341929'
request({ url: url }, (error, response) => {
//console.log(response)
const data = JSON.parse(response.body)
//console.log(data)
console.log(data.current)
// console.log(data.current.temperature)
})