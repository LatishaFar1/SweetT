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

router.post('/tea', (request, response) => {
    //create new instance of a post
   const tea = new Tea(request.body)
   
   tea.save()
   .then((result) => {
    response.redirect('/')
   })
})


module.exports = router;