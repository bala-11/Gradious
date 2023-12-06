const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb://0.0.0.0:27017/transaction`, {useNewUrlParser: true});
      console.log(`MongoDB Connected: ${conn.connection.host}`.brightMagenta.bold);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

module.exports = connectDB;