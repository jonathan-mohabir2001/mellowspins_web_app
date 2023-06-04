/*
MELLOWSPINS.CA Node.js Express.js Backend. 

This file is the index file which is the entry point for my 
backend for this web application. 
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// constants set, may need to change the ports, will return after development process

app.get('/', (req, res) => {
  res.send('User has entered the Backend of the best web player');
});

app.listen(PORT, () => {
  console.log(
    `MELLOWSPINS.CA BACKEND RUNNING on PORT ${PORT}, Press ctrl + c to end`
  );
});
