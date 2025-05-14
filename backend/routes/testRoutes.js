const express = require('express');
const router = express.Router();
const { createTest, getTestsByModule } = require('../controllers/testController');

router.post('/tests', createTest);
router.get('/tests/:moduleId', getTestsByModule);

module.exports = router;
