const client = require("./client");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    client.getAll(null, (err, data) => {
        if (!err) {
            res.json(data.sponsors);
        }
    });
});

app.get("/sponsor/:id", (req, res) => {
    client.get({ id: req.params.id }, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });
});

app.get("/sponsors/streamall", (req, res) => {
    var sponsors = [];
    var call = client.streamAll();
    call.on("data", function (sponsor) {
        console.log(`received sponsor ${sponsor.id} from server`);
        sponsors.push(sponsor);
    });
    call.on("end", function () {
        console.log("the server finished sending");
        res.json(sponsors);
    });
    call.on("error", function (e) {
        res.json("an error occured streaming the sponsors :(");
    });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log("Client running at port %d", PORT);
});