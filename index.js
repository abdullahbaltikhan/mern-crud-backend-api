const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const usermodel = require('./model/userModel')

const app = express()

app.use(express.json())
app.use(cors())

// mongoose.connect('mongodb://localhost:27017/crud103')
mongoose.connect('mongodb+srv://rehmatullah:rehmatullah@cluster0.jhyvspl.mongodb.net/')

app.get('/', (req, res) =>{
    usermodel.find({})
    .then(result => res.json(result))
    .catch(error => console.log(error))
})

app.post('/newuser', (req, res) =>{
    // console.log(req.body)
    usermodel.create(req.body)
    .then(user => console.log(user))
    .catch(error => console.log(error))
})


app.get('/getuser/:id', (req, res) =>{
    const id = req.params.id;
    usermodel.findById({_id:id})
    .then(result => res.json(result))
    .catch(error => console.log(error))
})

app.put('/updateuser/:id', (req, res) =>{
    const id = req.params.id;
    usermodel.findByIdAndUpdate({_id:id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    })
    .then(result => res.json(result))
    .catch(error => console.log(error))
})


app.delete('/deleteUser/:id', (req, res) =>{
    const id = req.params.id;
    usermodel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(error => console.log(error))
})



app.listen('4000', () =>{
    console.log('app is runing')
})
