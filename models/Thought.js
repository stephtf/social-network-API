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
        virtuals: true,
    },
    id: false,
});

// this virtual is called `reactionCount` and it retrieves the length of the thought's `reactions` array field on query.
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        const numberOfReactions = this.reactions.length;
        return numberOfReactions;
    })

// initialize the model 
const Thought = model('thought', thoughtSchema)

module.exports = Thought;


