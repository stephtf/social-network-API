// reaction is schema only, so it won't become a model/table, but will be added to another model as a sub-document 

const mongoose = require('mongoose'); 

// create new instance of the schema 
const reactionSchema = new mongoose.Schema(
{
    reactionId: 
    // for reaction Id: use mongoose's ObjectId data type; default value is set to new ObjectId
    {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
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
        return this.createdAt.Date.now;
    }); 

module.exports = reactionSchema;

