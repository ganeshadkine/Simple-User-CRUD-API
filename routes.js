const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('./data');

// Route to get all users
router.get('/users', getAllUsers);

// Route to get a specific user by ID
router.get('/users/:id', getUserById);

// Route to create a new user
router.post('/users', createUser);

// Route to update an existing user
router.put('/users/:id', updateUser);

// Route to delete a user by ID
router.delete('/users/:id', deleteUser);

module.exports = router;
