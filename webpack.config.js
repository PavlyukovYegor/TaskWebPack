const webpack = require('webpack');


module.exports = {
  entry: "./index",
  output: {
    filename: "build.js",
    library: "index"
    },
    resolve: {
      modulesDirectories: ['node_modules']
    },

    watch: true,


    devtool: "source-map",

    resolveLoader: {
      modulesDirectories: ['node_modules'],
      moduleTemplates: ['*-loader', '*'],
      extensions: ['', '.js']
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        JQuery: 'jquery'
      }),
      new webpack.ProvidePlugin({
        bootstrap: 'bootstrap.css'
      })
    ],
    module: {
      loaders: [
        {
        test: /\.(js|jsx)?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react', 'stage-0', 'stage-1']
        }
      },{
      test: /\.less$/,
      loader: 'style!css!less'
    },{
      test: /\.scss$/,
      loader: 'style!css!sass'
    },{
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    },
    // {
    //   test: /bootstrap\/js\//,
    //   loader: 'imports?JQuery=jquery'
    // }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080
  }
  };
