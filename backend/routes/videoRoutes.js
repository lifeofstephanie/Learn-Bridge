const express = require('express');
const router = express.Router();
const { createVideo, getVideosByModule } = require('../controllers/videoController');

router.post('/', createVideo);
router.get('/:moduleId', getVideosByModule);

module.exports = router;
