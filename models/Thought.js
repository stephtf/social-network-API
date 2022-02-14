const mongoose = require('mongoose'); 

// create new instance of the thought schema 
const thoughtSchema = new mongoose.Schema(
{
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 }, 
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: String,
    reactions: [{
        reactionSchema,
    }]
},
    {
    toJSON: {
        getters: true,
    },
    // id: false,
});

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

module.exports = thoughtSchema;


