# social network API - pseudocode

## What am I making? 
I am building and structuring an API for social networking purposes. Users share thoughts, react to others' thoughts, and create friend lists. 

Technologies 
- Express.js 
- MongoDB database 
- Mongoose ODM 
- Insomnia (there's no front end) 

## Requirements 
- submit your Github link 
    - be sure to include a README 
- submit a walkthrough video 
    - should have post, put, and delete routes 
    - should be able to CRUD users and thoughts in the database

## Steps 
1. Download and install everything 

2. Set up server 

3. Create the database and models 
- need to understand: 
    - virtuals 
    - getters 
    - setters 

4. Create your API routes 
- USERS - GET `/api/users`
    - all users 
    - get a single user by their ID 
- USERS - POST `/api/users`
    - create a new user 
- USERS - PUT `/api/users`
    - upate a user by ID 
- USERS - DELETE `/api/users`
    - delete a user by ID 

- FRIEND OF USER `/api/users/:userId/friends/:friendId`
    - POST 
        - add a new friend to a user's friend list 
    - DELETE 
        - remove a friend from a user's friend list 

- THOUGHTS  `/api/thoughts`
    - GET 
        - all the thoughts 
        - a single thought by ID 
    - POST 
        - create a new thought 
        - push that new thought to the id of the user (the user's thought array)
    - PUT 
        - update a thought by ID 
    - DELETE 
        - delete a thought by ID 

- REACTIONS `/api/thoughts/:thoughtId/reactions`
    - POST 
        - create a reaction of a thought (stored in the thought's field called 'reactions')
    - DELETE 
        - pull/remove the reaction by the reactionID value 