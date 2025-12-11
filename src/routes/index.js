const express = require('express');
const router = express.Router();

// Import route modules
const userRoutes = require('./userRoutes');
// const productRoutes = require('./productRoutes');

// API welcome route
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Shopping Mall API',
    version: '1.0.0'
  });
});

// Mount routes
router.use('/users', userRoutes);
// router.use('/products', productRoutes);

module.exports = router;

