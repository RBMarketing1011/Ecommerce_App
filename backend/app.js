
import path from 'path'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import express from 'express'

//Utils
import connectDB from './config/db.js'

//initialize
dotenv.config()
const port = process.env.PORT || 5000
const app = express()

//Database 
connectDB()

//App Usage 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) =>
{
  res.send('Server Running')
})

app.listen(port, () =>
{
  console.log(`Server Running on port ${ port }`)
})