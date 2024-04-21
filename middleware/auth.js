require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user');


const JWT_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";


function auth(req, res, next) {
  const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ message: 'Token not provided' });
//   }
  jwt.verify(token, JWT_SECRET, ( decoded) => {   
    req.user = decoded;
    next();
  });
}

module.exports = auth;
