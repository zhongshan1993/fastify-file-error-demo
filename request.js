const fs = require('fs')
const FormData = require('form-data')
const axios = require('axios')

const file = './test.txt'
const bodyData = new FormData()
const b = fs.readFileSync(file, { encoding: 'base64' })
bodyData.append('file', b)
console.log(bodyData.getHeaders())
axios({
  method  : 'post',
  url     : 'http://localhost:3000/cloupia/api/rest?opName=userAPI%3AuserAPIUnifiedImport&opData=%7B%7D',
  headers : {
    ...bodyData.getHeaders(),
    'Content-Length': 243
  },
  data    : bodyData
})
  .then((resolve) => {
    console.log(resolve.data);
  })
  .catch((error) => console.log(error.response.data));