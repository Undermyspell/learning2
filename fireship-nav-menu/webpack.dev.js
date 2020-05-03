const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebPackPlugin({
        template: "./src/template.html",
        chunks: ["main"],
        filename: "index.html"
    }), new HtmlWebPackPlugin({
        template: "./src/gallery.html",
        chunks: ["gallery"],
        filename: "gallery.html"
    })],
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }],
    }
});