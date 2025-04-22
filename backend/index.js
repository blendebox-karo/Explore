import express from 'express'
import dotenv from 'dotenv'
import userRoutes from '../backend/routes/userRoutes.js'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

const port = process.env.PORT || 5000
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/users', userRoutes)

app.listen(port, () => `Server running on port ${port} 🔥`)
