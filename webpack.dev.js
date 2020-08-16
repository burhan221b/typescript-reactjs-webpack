// For system to know root directory
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // Remember, the way this array is read is in reverse order, so need to place "sass-loader" at the end
                use: [
                    "style-loader", // 3. Inject style tags into DOM
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader" // 1. Turns sass into css
                ],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            }
        ]
    }
});