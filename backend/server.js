const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const signUpSchema = require('./models/signupmodel');
const routesUrl = require('./route/routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use('/',routesUrl);

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, () => {
  console.log("Connected");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})