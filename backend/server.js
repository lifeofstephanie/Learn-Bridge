const express = require('express');
const articleRoutes = require('./routes/articleRoutes');

const app = express();

app.use(express.json());

// Routes
app.use('/api/articles', articleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
