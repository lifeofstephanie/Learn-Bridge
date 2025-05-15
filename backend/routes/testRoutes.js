const express = require('express');
const router = express.Router();
const { createTest, getTestsByModule } = require('../controllers/testController');

router.post('/', createTest);
router.get('/:moduleId', getTestsByModule);

module.exports = router;
