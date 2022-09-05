const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const Tea = require('./models/teasModel');
const cors = require('cors');


app.use(cors());
app.use(express.json());

// CONNECTING TO MONGODB
const dbURL = 'mongodb+srv://Tish:5hTs0PblMn2ZzWkj@teas.twayqzg.mongodb.net/Sweet-T';
mongoose.connect(dbURL)
    .then((result) => app.listen(process.env.PORT || 4000) )
    .then(console.log('server running on port 4000'))
    .catch((error) => console.log(error));

  
app.use('/', require('./routes/teaRoutes'))


