const app = require('express').Router(); 
const User = require('../models/User');

// get all users
// localhost:3001/api/users
app.get('/users', async (req, res) => {
try {
    const allUsers = await User.find(); 
    res.status(200).json(allUsers);
} catch (err) {
    res.status(500).json(err); 
}
});

// get a single user by their Id
// localhost:3001/api/users/id 
app.get('/users/:_id', async (req, res) => {
try {
    const oneUser = await User.findOne({ _id: req.params._id });
    res.status(200).json(oneUser);
} catch (err) {
    res.status(500).json(err);
}
});

// create a new user
// localhost:3001/api/users
app.post('/users', async (req, res) => {
    try {
        const newUser = await User.create({ username: req.body.username, email: req.body.email }); 
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err); 
    }
    });

// update user by their ID
// localhost:3001/api/users
app.put('/users/:_id', async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate({_id: req.params._id}, { username: req.body.username, email: req.body.email });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

// delete a user by their id 
// localhost:3001/api/users/:_id
app.delete('/users/:_id', async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({_id: req.params._id });
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

// add a friend of a specific user 
// localhost:3001/api/users/:id/friends/:friendId
app.put('/users/:_id/friends/:friendId', async (req, res) => {
    try {
        const newFriend = await User.findOneAndUpdate({ _id: req.params._id }, { friends: req.params.friendId }); 
        res.status(200).json(newFriend);
    } catch (err) {
        res.status(500).json(err); 
    }
    });

// delete a friend of a specific user 
app.delete('/users/:_id/friends/:friendId', async (req, res) => {
    try {
        const deletedFriend = await User.findOne({ _id: req.params._id }).delete({ friends: req.params.friendId }); 
        res.status(200).json(deletedFriend);
    } catch (err) {
        res.status(500).json(err); 
    }
    });


    // - DELETE 
    //     - remove a friend from a user's friend list 




// The following GET route is for thoughts: `/api/thoughts`

    // - GET 
    //     - all the thoughts 

    // GET
    //     - a single thought by ID 


    // - POST 
    //     - create a new thought 

    // POST
        // - push that new thought to the id of the user (the user's thought array)


    // - PUT 
    //     - update a thought by ID 


    // - DELETE 
    //     - delete a thought by ID 




// The following routes are for the reactions to thoughts
// - REACTIONS `/api/thoughts/:thoughtId/reactions`
    // - POST 
    //     - create a reaction of a thought (stored in the thought's field called 'reactions')


    // - DELETE 
    //     - pull/remove the reaction by the reactionID value 


module.exports = app; 