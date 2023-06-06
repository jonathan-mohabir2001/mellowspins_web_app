/*
Router Will be utilized within thsis file and then exported as 
its own API endpoint for index.js to utilize 
*/

const express = require('express');
const router = express.Router();
// assign the router constant methods of the Router object.

const { Storage } = require('@google-cloud/storage');
// importing the Google Cloud Storage object again from the library. MOVING HERE FROM INDEX.JS

const storage = new Storage({
  projectId: 'mellowspins',
  keyFilename: 'service-account.json',
});

router.get('/', async (req, res) => {
  const [files] = await storage.bucket('mellowspins_mixes_bucket').getFiles();
  const fileNames = files.map((file) => file.name);
  res.json(fileNames);
});

module.exports = router;
