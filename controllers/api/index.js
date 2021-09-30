const router = require('express').Router();
const userRoutes = require('./userRoutes')
console.log("hit api")
router.use('/users', userRoutes);

module.exports = router;
