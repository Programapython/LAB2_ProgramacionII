const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')

const app = express()
app.use(express.json())

const Users = require('./models/users')

const DB_USER = "test2"
const DB_PASSWORD = "test2"
const COLLECTION = "LaboratorioII"

app.use(express.json())

app.get('/', (req,res) =>{
  res.json({mesage: "Hello express"})
})

app.get('/users ', async (req,res) =>{
  try {
      const User = await users.find()
      res.status(200).json(person)
  } catch (error) {
      res.status(500).json({error:error})
  }
})

//READ

app.get('/users/:id', async(req,res) =>{
  //console.log(req)
  const id = req.params.id
  try {
      const user = await Users.findOne({_id: id})
      if(!users){
        res.status(422).json({mesage: "User not found"})
        return
      }
      res.status(200).json(users)
  }catch (error) {
    res.status(500).json({error: error})
  }
}) 

//UPDATE

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