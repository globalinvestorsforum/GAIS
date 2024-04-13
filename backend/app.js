const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const emailRoutes = require("./routes/emailRoutes");
const cors = require("cors");

dotenv.config();
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors()); 
app.use(emailRoutes)
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});