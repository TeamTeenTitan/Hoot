const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://titianhoot:<password>@clusterhoot.9x4ag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

  // 'mongodb+srv://titianhoot:titanhoot@clusterhoot.9x4ag.mongodb.net/hoot?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL)
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}; 

module.exports = connectDB;