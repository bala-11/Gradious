const express = require("express");

const connectDB = require("./config/db");

require("colors");

const app = express();

app.use(express.json());


// call connectDB to get db connection
connectDB();

const routes = require("./routes/customerRoutes");

// used to call routes with the help of app , then routes directs to the specified location
app.use('/',routes);

const PORT = 5000;

app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`.brightMagenta.bold);
});