require("dotenv").config();
const express = require("express");
const https = require("https");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema")
const resolvers = require("./graphql/resolver/index")
const { AuthDirective } = require("./graphql/directives/auth.directive");
const { getUserContext } = require("./auth/usercontext");
const { baseUrl } = require("./middleware/base-url");
const client = require("./grpcclient/client");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth: AuthDirective
    },
    context: ({ req }) => {
        const token = req.headers.authorization || "";
        const userContext = getUserContext(token);
        return { userContext };
    },
});

const app = express();
app.use(bodyParser.json());
app.use(cookieParser("mycookiesecret"));
app.use(baseUrl("/api"));

app.get("/", function (req, res) {
    res.send("Hello from container land!");
});

app.get("/takemycookie", function (req, res) {
    console.log("signed cookies", req.signedCookies);
    res.json(req.signedCookies);
});

app.get("/givemecookie", function (req, res) {
    const value = "hello from cookie";
    const params =  {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpOnly: true,
        signed: true,
        secure: true,
        sameSite: "strict"
    };
    // @ts-ignore
    res.cookie("mylearningcookie", value, params);
    res.json({
        value,
        ...params
    })
});


app.get("/imageurls", (req, res, next) => {
    const filenames = [];
    const directoryPath = path.join(__dirname, "images");
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log("Unable to scan directory: " + err);
        }
        files.filter(file => file.match(/\.(svg|png|jpg|gif|svg)$/)).forEach(function (file) {
            filenames.push(file);
        });

        res.json(filenames);
    });
});

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/sponsors", (req, res) => {
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

app.set("port", process.env.PORT || 3000);
mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ENDPOINT}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        // if (fs.existsSync("./security/cert.pem")) {
        //     console.log("https is enabled for localhost");
        //     https.createServer({
        //         key: fs.readFileSync("./security/cert.key"),
        //         cert: fs.readFileSync("./security/cert.pem")
        //     }, app).listen(app.get("port"), () => {
        //         console.log(`Server listening on port ${app.get("port")}`)
        //     })

        // } else {
            app.listen(app.get("port"), () => {
                console.log(`Server listening on port ${app.get("port")}`);
            });
        // }
    })
    .catch(err => {
        console.log(err);
    });

server.applyMiddleware({ app});
