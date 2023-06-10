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
  try {
    const [files] = await storage.bucket('mellowspins_mixes_bucket').getFiles();
    const fileNames = files.map((file) => file.name);

    // Generate signed URLs for each file
    const signedUrls = await Promise.all(
      fileNames.map(async (fileName) => {
        const file = storage.bucket('mellowspins_mixes_bucket').file(fileName);
        try {
          const [url] = await file.getSignedUrl({
            version: 'v4',
            action: 'read',
            expires: Date.now() + 1000 * 60 * 60, // 1 hour
          });
          return url;
        } catch (err) {
          console.error(`Failed to create signed URL for ${fileName}: ${err}`);
          return null; // or some error value
        }
      })
    );

    // Filter out any null values (failed to generate signed URL)
    const validUrls = signedUrls.filter((url) => url !== null);

    res.json(validUrls);
  } catch (err) {
    console.error(`Failed to list files: ${err}`);
    res.status(500).send('Failed to list files');
  }
});

module.exports = router;
