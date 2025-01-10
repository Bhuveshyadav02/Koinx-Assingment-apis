const express = require('express');
const app = express();
const cryptoRoutes=require('./routes/cryptoRoutes')
const db = require('./database/index'); 
const cron=require('cron');
const { storeCryptoData } = require('./controller/cryptoController');
const port = 5000;
app.use('/api/crypto',cryptoRoutes)


//const {storeCryptoData}=require('./controller/cryptoController')
const job=new cron.CronJob('0 */2 * * *', () => {
    console.log('Running scheduled job...');
    storeCryptoData();
  });
  job.start()
const server = app.listen(port, async () => {
    try {
        await db(); // Connect to the database
        console.log("Server and database connected successfully on port", port);
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);
    }
});
