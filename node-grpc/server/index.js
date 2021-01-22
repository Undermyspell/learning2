const PROTO_PATH = "./proto/sponsors.proto";
const path = require("path");
const express = require("express");
var sponsorsService = require("./implementations/sponsorsservice");
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");


const app = express();

app.use("/proto", express.static(path.join(__dirname, "proto")));

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

var sponsorsProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
server.addService(sponsorsProto.SponsorsService.service, sponsorsService);

const PORTGRPC = process.env.PORTGRPC || 30043;
const ADDRESS = "0.0.0.0";

const PORT = process.env.PORT || 2021;
app.listen(PORT, () => {
    console.log("Client running at port %d", PORT);
});

server.bindAsync(
    `${ADDRESS}:${PORTGRPC}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err != null) {
          return console.error(err);
        }
        console.log(`gRPC listening on ${ADDRESS} ${ port }`);
        server.start();
      },
);
