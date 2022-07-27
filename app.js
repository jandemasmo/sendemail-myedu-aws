const express = require("express");
const app = express();
const cors = require("cors");
const MailController = require("./constrollers/mailController");
require("dotenv-safe").config();


app.use(cors());
app.use(express.json());


app.post("/contact", MailController.contact );

module.exports = app;