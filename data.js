let users = [
    { id: 1, name: 'Ganesh Adkine', age: 23 },
    { id: 2, name: 'Vaishnavi Adkine', age: 25 },
  ];
  
  function getAllUsers(req, res) {
    res.json(users);
  }
  
  function getUserById(req, res) {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  }
  
  function createUser(req, res) {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
  }
  
  function updateUser(req, res) {
    const id = parseInt(req.params.id);
    const updateUser = req.body;
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    users[index] = { ...users[index], ...updateUser };
    res.json(users[index]);
  }
  
  function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser);
  }
  
  module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
  