import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
export const signup =  (req, res) => {
  // Signup logic will go here
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = new User({ username, email, password: hashedPassword });
  newUser.save()
    .then(user => res.status(201).json({ message: 'User created successfully', user }))
    .catch(err => res.status(500).json({ error: 'Error creating user', details: err }));
}