const express = require('express');
const router = express.Router();
const { createVideo, getVideosByModule } = require('../controllers/videoController');

router.post('/videos', createVideo);
router.get('/videos/:moduleId', getVideosByModule);

module.exports = router;
