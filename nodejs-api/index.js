const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("Hello from container land!");
});


app.get("/imageurls", (req, res, next) => {
    const filenames = [];
    const directoryPath = path.join(__dirname, 'images');
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function (file) {
            filenames.push(file);
        });

        res.json(filenames);
    });
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`);
});
