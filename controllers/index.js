const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home.js');
const dashboardRoutes = require('./dashboard.js');

//routes so when on browser will be local /..the following
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;