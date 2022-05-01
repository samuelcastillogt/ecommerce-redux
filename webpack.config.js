const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports={
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    mode: "development",
    resolve:  {
        extensions: [".js", ".jsx"],
        alias:{
            "@component": path.resolve(__dirname, "./src/component")
        }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: "body",
            template: "./public/index.html",
            filename: "index.html"
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
}
