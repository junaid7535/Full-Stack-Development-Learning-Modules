const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Sample route

app.get('/api',(req,res) => {
    res.json({ message: 'Hello from the Express API!' });
})

const data = {
    user1 : "name1",
    user2 : "name1",
    user3 : "name3",
}

app.get('/userData',(req,res) => {
    res.json(data);
})

app.listen(3000,() => {
    console.log('Server is running on http://localhost:3000');
})