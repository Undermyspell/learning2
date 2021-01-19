const PROTO_PATH = "./proto/sponsors.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const GRPCENDPOINT = process.env.GRPCENDPOINT || "localhost";
const PORT = process.env.PORT || 30043;

console.log(`gRPC endpoint: ${GRPCENDPOINT}`)
const SponsorsService = grpc.loadPackageDefinition(packageDefinition).SponsorsService;
const client = new SponsorsService(
    `${GRPCENDPOINT}:${PORT}`,
    grpc.credentials.createInsecure()
);

module.exports = client;