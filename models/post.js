const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        require : true
    },
    body: {
        type: String
    }
});

module.exports = mongoose.model('Post', schema);