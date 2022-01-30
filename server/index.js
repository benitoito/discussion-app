import express from 'express'
import cors from 'cors'

import { config } from './config/config.js'


const app = express()


app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())



const PORT = config.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})