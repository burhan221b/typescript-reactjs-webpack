// For system to know root directory
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            },
            // {
            //     test: /\.scss$/,
            //     // Remember, the way this array is read is in reverse order, so need to place "sass-loader" at the end
            //     use: [
            // "style-loader", // 3. Inject style tags into DOM
            // "css-loader", // 2. Turns css into commonjs
            // "sass-loader" // 1. Turns sass into css
            // ],
            //     include: path.resolve(__dirname, "src"),
            //     exclude: /node_modules/,
            // },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "assets"
                        },
                    },
                ],
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
    watch: true,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
}