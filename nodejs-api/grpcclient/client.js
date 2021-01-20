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
const GRPCPORT = process.env.GRPCPORT || 30043;
const channelCredentials = GRPCPORT == 443 ? grpc.credentials.createSsl() : grpc.credentials.createInsecure();

console.log(`gRPC endpoint: ${GRPCENDPOINT}:${GRPCPORT}`)
const SponsorsService = grpc.loadPackageDefinition(packageDefinition).SponsorsService;
const client = new SponsorsService(
    `${GRPCENDPOINT}:${GRPCPORT}`,
    channelCredentials
);
module.exports = client;