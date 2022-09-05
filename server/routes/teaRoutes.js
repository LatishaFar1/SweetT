const express = require('express');
const Tea = require('../models/teasModel');
const router = express.Router();

//GET REQUEST 


router.get('/tea', (request, response) => {
    Tea.find()
    .then((ourTeas) => {
        response.json((ourTeas))
    })
})



//POST REQUEST

router.post('/new', (request, response) => {
    //create new instance of tea
    const name = request.body.name;
    const img = request.body.img;
    const newTea = new Tea({
        name, img
    });
   
   newTea.save()
   .then((result) => {
    response.redirect('/')
   })
})


module.exports = router;