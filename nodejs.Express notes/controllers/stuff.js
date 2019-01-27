const Thing = require('../models/thing');

exports.createThing = (req, res, next)=>{ 
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userID: req.body.userID
      });
    thing.save()
    .then(()=>{
        console.log('Objet créé');
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
  };

exports.getOneThing = (req, res, next) => {
    Thing.findOne({
      _id: req.params.id
    })
    .then(
      (thing) => {
        res.status(200).json(thing);
      }
    )
    .catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.modifyThing = (req, res, next)=>{
    const thing = new Thing({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userID: req.body.userID     
    });
    Thing.updateOne({
        _id: req.params.id
    }, thing)
    .then(
        ()=> res.status(201).json({message: "Mise à jour : OK !"})
    )
    .catch(
        (error)=> res.status(400).json({error:error})
    )
  };

  exports.deleteThing = (req,res,next)=>{
    Thing.deleteOne({
      _id: req.params.id
    }).then(()=>{
      res.status(200).json({
        message : "objet effacé"
      })
    }).catch((error)=>{
      res.status(400).json({error : error})
    })
  };

  exports.getAllStuff = (req, res, next) => {
    Thing.find()
    .then(
      (things) => {
        res.status(200).json(things);
        console.log(`Il y a ${things.length} objets dans cette collection`);
      })
      .catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };