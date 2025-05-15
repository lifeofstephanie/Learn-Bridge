const express = require('express');
const app = express();
const articleRoutes = require('./routes/articleRoutes');
const videoRoute = require('./routes/videoRoutes');
const testRoutes = require('./routes/testRoutes');
const courseRoutes = require('./routes/courseRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const path = require('path');

app.use(express.json());
app.use('/api/articles', articleRoutes);
app.use('/api/videos', videoRoute);
app.use('/api/tests', testRoutes); 
app.use('/api/courses', courseRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/static', express.static(path.join(__dirname, '../assets/videos')));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
