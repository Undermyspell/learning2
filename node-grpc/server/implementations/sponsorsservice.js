const { sponsors } = require("../data/sponsors");
var grpc = require("grpc");

const sponsorsService = {
    getAll: (_, callback) => {
        console.log("received getall");
        callback(null, { sponsors });
    },

    get: (call, callback) => {
        console.log(`received get for id ${call.request.id}`);
        let sponsor = sponsors.find(n => n.id == call.request.id);

        if (sponsor) {
            callback(null, sponsor);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Not found"
            });
        }
    },
}

module.exports = sponsorsService;