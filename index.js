const express = require('express');
const ConnectDB = require('./DataBase/DB');
const router = require('./Routes/Routes.js'); 
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', router); 

app.get('/', (req, res) => {
  res.send('This is our home route');
});

app.listen(8080, async () => {
  try {
    await ConnectDB
    console.log('Server is running and DB is connected');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
});
