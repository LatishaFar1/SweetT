const mongoose = require('mongoose');
const schema = mongoose.Schema;


const teasSchema = new schema({
    name: {
        type: String
    },
    img: {
        type: String
    }
}, {timestamps: true});

const Tea = mongoose.model('Tea', teasSchema);

module.exports = Tea;