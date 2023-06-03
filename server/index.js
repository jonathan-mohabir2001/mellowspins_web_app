// Entry Point for backend
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// constants set, may need to change the ports, will return after development process


app.get('/', (req,res) => {
  res.send('User has entered the Backend of the best web player')
})

app.listen(PORT, () => {
  console.log(`MELLOWSPINS.CA BACKEND RUNNING, Press ctrl + c to end`);
});
