const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

// Route to get all modules by course ID
router.get('/:courseId', moduleController.getModuleByCourse);
router.post('/', moduleController.createModule);

module.exports = router;