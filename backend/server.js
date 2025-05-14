const express = require('express');
const app = express();
const articleRoutes = require('./routes/articleRoutes');
const videoRoute = require('./routes/videoRoutes');
const testRoutes = require('./routes/testRoutes');
const path = require('path');

app.use(express.json());
app.use('/api', articleRoutes);
app.use('/api', videoRoute);
app.use('/api', testRoutes);
app.use('/static', express.static(path.join(__dirname, '../assets/videos')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
