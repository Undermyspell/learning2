const PROTO_PATH = "./proto/sponsors.proto";
var sponsorsService = require("./implementations/sponsorsservice");

var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

var sponsorsProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
server.addService(sponsorsProto.SponsorsService.service, sponsorsService);

const PORT = process.env.PORT || 30043;
const ADDRESS = process.env.ADDRESS || "0.0.0.0";


server.bindAsync(
    `${ADDRESS}:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err != null) {
          return console.error(err);
        }
        console.log(`gRPC listening on ${ port }`);
        server.start();
      },
);
