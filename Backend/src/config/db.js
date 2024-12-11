const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://rahuldhakad201rd:fUYT9Lm3wXmlmSGX@cluster0.rdfks.mongodb.net/projectManagement`, // Appending database name
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(
      `\n MongoDB connected !! DB HOST:${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log("MONGODB connection Failed: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
