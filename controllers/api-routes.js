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
app.get('/users/:id', async (req, res) => {
try {
    const oneUser = await User.findOne({"id": `${req.params.id}`});
    res.status(200).json(oneUser);
} catch (err) {
    res.status(500).json(err);
}
});

// create a new user
// localhost:3001/api/users
app.post('/users', async (req, res) => {
    try {
        const newUser = await User.insertOne({ username: req.body.name, email: req.body.email }); 
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err); 
    }
    });



// - USERS - PUT `/api/users`
//     - upate a user by ID 




// - USERS - DELETE `/api/users`
//     - delete a user by ID 



// The following POST route is for adding a friend of the user: `/api/users/:userId/friends/:friendId`
    // - POST 
    //     - add a new friend to a user's friend list 


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