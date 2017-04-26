var path = require("path")


module.exports = require("./make-webpack-config.js")({
  _special: {
    separateStylesheets: false,
    minimize: true,
    sourcemaps: true
  },

  entry: {
    "swagger-editor-standalone-preset": [
      "./src/standalone/index.js"
    ]
  },

  output:  {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
    library: "SwaggerEditorStandalonePreset",
    libraryTarget: "umd",
    filename: "[name].js",
    chunkFilename: "js/[name].js",
  },

})
