const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/test", (req, res, next) => {
    res.json({name: "test"});
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(3000, () => console.log("running"));