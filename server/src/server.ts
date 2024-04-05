import { router } from "./routes"
require('dotenv').config();
import cors from "cors";
const express = require('express')

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3334 , () => console.log("Server is running on http://localhost:3334"))