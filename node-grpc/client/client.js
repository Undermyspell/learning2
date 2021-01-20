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
const channelCredentials = PORT == 443 ? grpc.credentials.createSsl() : grpc.credentials.createInsecure();

console.log(`gRPC endpoint: ${GRPCENDPOINT}`)
const SponsorsService = grpc.loadPackageDefinition(packageDefinition).SponsorsService;
const client = new SponsorsService(
    `${GRPCENDPOINT}:${PORT}`,
    channelCredentials
);

module.exports = client;