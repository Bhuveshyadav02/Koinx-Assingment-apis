require('dotenv').config();
const uri = process.env.MONGO_URI
const mongoose = require('mongoose');




// Async function to connect to the database
const Connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};



module.exports = Connect;
