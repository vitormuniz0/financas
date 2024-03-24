import { router } from "./routes"
require('dotenv').config();

const express = require('express')

const app = express()

app.use(express.json())
app.use(router)

app.listen(3334 , () => console.log("Server is running on http://localhost:3334"))