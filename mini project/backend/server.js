const express = require('express');
const cors = require('cors');
const routes = require('./routes/jobRoutes.js');

const app = express();  

app.use(cors());
app.use(express.json());

app.use('/api/jobs',routes);

app.listen(3000,() => {
    console.log('Server is running on port 3000');
})
