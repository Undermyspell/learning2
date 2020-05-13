require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const graphqlHttp = require("express-graphql");
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');


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
        files.filter(file => file.match(/\.(svg|png|jpg|gif|svg)$/)).forEach(function (file) {
            filenames.push(file);
        });

        res.json(filenames);
    });
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(
    '/graphql',
    graphqlHttp({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true
    })
);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`);
});
// mongoose
//     .connect(
//         `mongodb+srv://${process.env.MONGO_USER}:${
//         process.env.MONGO_PASSWORD
//         }@learning-xy5kr.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
//     )
//     .then(() => {
//         app.listen(app.get("port"), () => {
//             console.log(`Server listening on port ${app.get("port")}`);
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     });

