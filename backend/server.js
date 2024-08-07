require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')



const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('server is running on port', process.env.PORT)
})

process.env
