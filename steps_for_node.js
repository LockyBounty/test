const express = require("express");
const bodyParser = require("body-parser");

const StudentsRoute = require('./Route/students') //appelle le fichier route exporté

//après avoir fait db sur mlab:
const mongoose = require("mongoose")
mongoose.connect("mlab://user:pass")
.then


const app = express()
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const port = 5000

//-------------
//creer une route
//Par exemple creer dossier Route puis fichier students.js
//Dans fichier students.js :

//const StudentsRoute = app.get('/students', (req,res) =>{
//    res.send({'students':["Baltazar", "Francis"]}).status(200)
//    })
//et l'exporter

//module.exports = StudentsRoute 
//---------------

StudentsRouter(app) //--> appele fichier route



app.listen(port, ()=>{
    console.log("server is running" +port)
})

//Creer db sur mlab et copier le code donné après avoir créé l'user



//-------------
//creer modele de la db
//Par exemple creer dossier Modele puis students.js :
/*
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StudentSchema = Schema({
    name:{
        type: String,
        required: true
        },
    email:{
        type: String,
        required: true
        },
    age:{
        type: Number,
        default : 18
    },
    gender:{
        type: Boolean,
        required : true
    }
})
const Student = mongoose.model(
    "students", StudentsSchema
)

module.exports = Student
*/

//Dans /Route/students.js on change pour post
/*
const Student = require('../Modele/Student') --> là où se trouve notre modele

const studentsRoute= (app) =>{
    //const name = req.body.name//
    const {name, gender, age} = req.body //--> version plus rapide d'ecrire que la ligne en haut!
    Student.create({ //--> commande mongo 
    name,
    age,
    gender
    }) //--> asynchronous by default
    
    .then((student)=>{  //--> to make it synchronous
        res.status(200).send(student)
    })

}

*/

