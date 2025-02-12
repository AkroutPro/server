require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

// Middleware
app.use(express.json());
app.use('/api', userRoutes);

// Connect to Database and Start Server
sequelize.authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL');
    app.listen(3001, () => {
      console.log(`Server running on http://localhost:3001`);
    });
  })
  .catch((err) => console.error('Unable to connect to database:', err));
