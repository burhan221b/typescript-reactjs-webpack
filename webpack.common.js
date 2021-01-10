// For system to know root directory
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // devtool: "inline-source-map",
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/,
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
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "assets"
                        }
                    }
                ]
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
    watch: true,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
}