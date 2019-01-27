const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing');
const stuffRoutes = require('./routes/stuff');//<---- 1

mongoose.connect('mongodb+srv://test1:test123@cluster0-nfjer.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas");
    })
    .catch((error) => {
        console.log("Unable to connect to DB...");
        console.error(error);
    });

app.use(bodyParser.json()); //convertit en objets manipulables

app.use('api/stuff', stuffRoutes);// <---- 2
/* app.post('/api/stuff', (req, res, next) => {//<--- comment

    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userID: req.body.userID
    });

    thing.save()
        .then(() => {
            res.status(201).json({
                message: "Objet sauvegardé dans la DB !"
            });
        })
        .catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
});

//--------> 1
app.put('/api/stuff/:id', (req, res, next) => {
    //--------------> 2
    const thing = new Thing({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userID: req.body.userID
    });
    //------------> 3
    Thing.updateOne({
            _id: req.params.id
        }, thing)
        //------------> 4
        .then(
            () => res.status(201).json({
                message: "Mise à jour : OK !"
            })
        )
        //------------> 5
        .catch(
            (error) => res.status(400).json({
                error: error
            })
        )
});

//-------> 1
app.delete('/api/stuff/:id', (req, res, next) => {
    //----> 2
    Thing.deleteOne({
        _id: req.params.id
    })
    //-----> 3
    .then(() => {
        res.status(200).json({
            message: "Objet supprimé !"
        })
    })
    //-----> 4
    .catch((error) => {
        res.status(400).json({
            error: error
        })
    })
});

//le :id est pour req.params.id / si :userid alors req.params.userid
//------> 1
app.get('/api/stuff/:id', (req, res, next) => {
    //-------> 2
    Thing.findOne({
            _id: req.params.id
        })
        //--------> 3   
        .then(
            (thing) => {
                res.status(200).json(thing);
            }
        )
        //--------> 4
        .catch(
            (error) => {
                res.status(404).json({
                    error: error
                });
            }
        );
});

app.use('/api/stuff', (req, res, next) => {
    //---------> 1
    Thing.find()
        //---------> 2
        .then(
            (things) => {
                res.status(200).json(things);
                console.log(`Il y a ${things.length} objets dans cette collection`);
            })
        //-------------> 3  
        .catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
});
 */


module.exports = app;