// gather all files

const router = require('express').Router();

const userRoutes = require('./userroutes');
const postRoutes = require('./postroutes');
const commentRoutes = require('./commentroutes');

//all the following url will be /api/..
router.use('/user', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;