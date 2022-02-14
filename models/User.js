const mongoose = require('mongoose'); 

// create new instance of the use schema 
const userSchema = new mongoose.Schema(
{
    username: { type: String, Unique: true, required: true, trimmed: true }, 
    email: { type: String, required: true, unique: true},
    thoughts: [{ type: Schema.Types.Id, ref: 'Thought',}],
    friends: [{ type: Schema.Types.Id, ref: 'User',}],
},
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

userSchema 
    .virtual()
    .get 

    // virtual is called 'friendCount' and it retrieves the length of the user's 'friends' array field on query 

module.exports = userSchema;


