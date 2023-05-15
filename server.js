const express = require("express"); // express package import
const app = express(); //express -> func

const connectDB = require("./db");

connectDB(); // to run the above function that is kept inside the db file

//setting up the server to accept the json
app.use(express.json()); // let's server accept json, as abody as post,get,put element
//express.json() is the middleware, middleware is the code that runs when the server get the request, before it get passed the routes

//setting up the routes
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter); //on every query subscribers we gonna use these

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
