const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: '*'}));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/VideoGames",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
).then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// Routes
app.use(routes);
app.use("/games", require("./routes/api/games"));

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
