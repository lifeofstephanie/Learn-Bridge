const Video = require('../models/videoModel');

exports.createVideo = async (req, res) => {
  try {
    const { title, url, duration, moduleId } = req.body;
    const video = await Video.create({ title, url, duration, moduleId });
    res.status(201).json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create video' });
  }
};
exports.getVideosByModule = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const videos = await Video.findAll({ where: { moduleId } });
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
};
exports.updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url, duration } = req.body;
    const video = await Video.findByPk(id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    video.title = title;
    video.url = url;
    video.duration = duration;
    await video.save();
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update video' });
  }
};
exports.deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findByPk(id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    await video.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete video' });
  }
};
exports.getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findByPk(id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch video' });
  }
};
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
};
exports.getVideoByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const video = await Video.findOne({ where: { title } });
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch video' });
  }
};