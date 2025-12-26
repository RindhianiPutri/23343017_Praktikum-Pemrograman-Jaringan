const request = require('postman-request')
const urlCuaca =
'http://api.weatherstack.com/current?access_key=bd5f2ec6c4c9038623ef1d64e63e366c&query=-0.8972176488507201,100.35069955341929&units=f'
request({ url: urlCuaca, json: true }, (error, response) => {
console.log('Saat ini suhu diluar mencapai ' +
response.body.current.temperature +
' derajat celcius. Kemungkinan terjadinya hujan adalah' + response.body.current.precip+ '%')
})
