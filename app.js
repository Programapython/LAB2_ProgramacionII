const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')

const app = express()
app.use(express.json())

const Users = require('./models/users')

const DB_USER = "test2"
const DB_PASSWORD = "test2"
const COLLECTION = "LaboratorioII"

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.h8qpoxo.mongodb.net/${COLLECTION}?retryWrites=true&w=majority`
    ).then(() => {
        console.log('conectado al MONGODB'.yellow)
        app.listen(5000, () => {
          console.log('server en el puerto 5000 ...'.bgYellow)
        }) 
    })
    .catch((err) => {
        console.log("err".bgRed)
})