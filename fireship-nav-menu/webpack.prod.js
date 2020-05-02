const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    // MiniCssExtractPlugin already minifies css...
    // optimization: {
    //     minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    // },
    plugins: [new HtmlWebPackPlugin({
        template: "./src/template.html", 
        minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    }), new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css"
    }
    ), new CleanWebpackPlugin()],
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader, // 3. extract css into files
                "css-loader", // 2. turns css into commonjs
                "sass-loader" // 1. turns sass into css
            ]
        }],
    },
});