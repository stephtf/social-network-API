// reaction is schema only, so it won't become a model/table, but will be added to another model as a sub-document (i think that's what it's called)

const mongoose = require('mongoose'); 

// create new instance of the thought schema 
const reactionSchema = new mongoose.Schema(
{
    reactionId: 
    // for reaction Id: use mongoose's ObjectId data type; default value is set to new ObjectId
    {},
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    {
    toJSON: {
        getters: true,
    },
    id: false,
});

// use a getter method to format the timestamp on query 
reactionSchema
    .get(function () {
        return 
    }); 

module.exports = thoughtSchema;

