const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({

    todo_description: {
        type: String
    },
    todo_title: {
        type: String
    }    
    
});

module.exports = mongoose.model('Todo', Todo);