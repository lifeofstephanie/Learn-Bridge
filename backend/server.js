const express = require('express');
const app = express();
const articleRoutes = require('./routes/articleRoutes');

app.use(express.json());
app.use('/api', articleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
