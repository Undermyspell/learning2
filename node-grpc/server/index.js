const PROTO_PATH = "./proto/sponsors.proto";
var sponsorsService = require("./implementations/sponsorsservice");

var grpc = require("grpc");
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
const ADRESS = "0.0.0.0";

console.log(`Server listening on ${ADRESS}:${PORT}`)
server.bind(`${ADRESS}:${PORT}`, grpc.ServerCredentials.createInsecure());
console.log("Server running at http://0.0.0.0:30043");
server.start();