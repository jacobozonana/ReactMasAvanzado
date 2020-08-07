const express = require('express');
const router = express.Router();

const { BlogController } = require('../controllers')
const { BlogValidator } = require('../validators');
const {verifyToken} = require('../middlewares')

router.get('/blog', BlogController.findAll);
router.get('/blog/:id', BlogController.findOne)
router.post('/blog', verifyToken, BlogValidator.create, BlogController.create);
router.patch('/blog/:id', verifyToken, BlogValidator.update, BlogController.update)
router.delete('/blog/:id', verifyToken, BlogValidator.eliminate, BlogController.eliminate)

module.exports = router;