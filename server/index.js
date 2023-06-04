/*
MELLOWSPINS.CA Node.js Express.js Backend. 

This file is the index file which is the entry point for my 
backend for this web application. 
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// constants set, may need to change the ports, will return after development process

//GOOGLE CLOUD STORAGE code below.
const { Storage } = require('@google-cloud/storage'); // import library

const storage = new Storage({
  projectId: 'mellowspins',
  keyFilename: 'service-account.json',
});
// Create Storage Object passed the ID of project ID, and then the fileName of the service account info

async function listFiles() {
  const [files] = await storage.bucket('mellowspins_mixes_bucket').getFiles();
  console.log('Files:');
  files.forEach((file) => {
    console.log(file.name);
  });
}
// A synch function to get files from the Bucket

listFiles();
// calling the list files function to be displayed into the terminal.
app.get('/', (req, res) => {
  res.send('User has entered the Backend of the best web player');
});

app.listen(PORT, () => {
  console.log(
    `MELLOWSPINS.CA BACKEND RUNNING on PORT ${PORT}, Press ctrl + c to end`
  );
});
