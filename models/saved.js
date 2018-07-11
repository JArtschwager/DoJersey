const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({

    username: {
        type: String,
    },
    activity_id: {
        type: Schema.Types.ObjectId, 
        ref: 'TodoNJ'
    }


});

//this builds out the object to talk to the DB
const Saved = mongoose.model("Saved", savedSchema);


module.exports = Saved;