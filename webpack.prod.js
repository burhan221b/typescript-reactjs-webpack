// For system to know root directory
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin"); // This plugin was already installed with webpack. Default for mode:"production". Needed again for minimizer

module.exports = merge(common, {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.[contentHash].js",
        path: path.resolve(__dirname, "public")
    },
    optimization: {
        minimizer: [new OptimizeCssWebpackPlugin(), new TerserPlugin()]
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/,
                // Remember, the way this array is read is in reverse order, so need to place "sass-loader" at the end
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract css from commonjs into files.
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader" // 1. Turns sass into css
                ],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            }
        ]
    }
});