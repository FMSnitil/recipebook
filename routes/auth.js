const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Pevně definovaný token

const JWT_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// POST /register - Registrace nového uživatele
router.post('/register', async (req, res) => {
  try {
    // Získání dat z requestu
    const { email, password, name } = req.body;

    // Kontrola, zda e-mail není již používán
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hashování hesla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Vytvoření nového uživatele
    const newUser = new User({
      email,
      password: hashedPassword,
      name
    });

    // Uložení nového uživatele do databáze
    await newUser.save();

    // Odpověď serveru
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /login - Přihlášení uživatele
router.post('/login', async (req, res) => {
  try {
    // Získání dat z requestu
    const { email, password } = req.body;

    // Hledání uživatele v databázi
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Porovnání hesla
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Odpověď serveru s pevně definovaným tokenem
    res.status(200).json({ token: JWT_SECRET });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
