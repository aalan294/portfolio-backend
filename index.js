const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT ||3400

app.listen(port,()=>{
    console.log(`server running in port ${port}`)
})

app.use(cors())
app.use(express.json())
app.use('/',require('./Router/allRouter'))