# webpack
#use/javascript
* is a module bundler
* supports the work of serving modularized front-end code and assets when it would be difficult to accomplish otherwise (due to sheer numbers of modules and dependencies to manage perhaps)

## config
for react and CSS modules
```javascript
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: ["./src/index.jsx"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}
```

## What webpack does
### Development
### Production
* [minification | Production | webpack](https://webpack.js.org/guides/production/#minification)