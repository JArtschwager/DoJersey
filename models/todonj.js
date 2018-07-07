const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todonjSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    url: String,
    description: String,
    location: String,
    imageURL: String,
    phoneNumber: String,
    interestType: String,
    
});

//this builds out the object to talk to the DB
const TodoNJ = mongoose.model("TodoNJ", todonjSchema);


module.exports = TodoNJ;