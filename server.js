const express = require('express');
const dotenv = require('dotenv');
const  cors = require('cors');
const connectDB = require('./config/connectDB');

const app = express();
const PORT = process.env.PORT || 5001;
dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', require('./routes/reminderRoutes'));

app.get('/', (req, res) => {
    res.send('Welcome brother!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
