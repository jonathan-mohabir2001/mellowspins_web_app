const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

const mixesRoutes = require('./routes/mixes');

app.use(cors()); // Use cors middleware here
app.use('/mixes', mixesRoutes);

app.get('/', (req, res) => {
  res.send('User has entered the Backend of the best web player');
});

app.listen(PORT, () => {
  console.log(
    `MELLOWSPINS.CA BACKEND RUNNING on PORT ${PORT}, Press ctrl + c to end`
  );
});
