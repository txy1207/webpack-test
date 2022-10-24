const path = require('path');
module.exports = {
    entry: {
        index: "./src/index.js",
        one: "./src/one"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].main.js",
    },
    mode: "development",
    module: {
        rules: [
        {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        // options: {
        // presets: ['@babel/preset-env','@babel/preset-react']
        // }
        }
        }
        ]
      
        },
          
        "devtool":"source-map"

}