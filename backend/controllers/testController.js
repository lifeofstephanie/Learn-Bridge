const Test = require('../models/testModel');

exports.createTest = async (req, res) => {
  try {
    const { question, options, answer, moduleId } = req.body;
    const test = await Test.create({ question, options, answer, moduleId });
    res.status(201).json(test);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create test' });
  }
};

exports.getTestsByModule = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const tests = await Test.findAll({ where: { moduleId } });
    res.status(200).json(tests);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tests' });
  }
};
exports.updateTest = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, options, answer } = req.body;
    const test = await Test.findByPk(id);
    if (!test) {
      return res.status(404).json({ error: 'Test not found' });
    }
    test.question = question;
    test.options = options;
    test.answer = answer;
    await test.save();
    res.status(200).json(test);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update test' });
  }
};
exports.deleteTest = async (req, res) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);
    if (!test) {
      return res.status(404).json({ error: 'Test not found' });
    }
    await test.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete test' });
  }
};