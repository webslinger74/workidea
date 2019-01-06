var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", path.join(__dirname, './src/index.js')],
        output:{
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    plugins: [
        new htmlWebpackPlugin({
        template:'index.html',
      filename:'index.html',
    inject: 'body'
    })
   ], 
  
   module: {
    rules: [
        {
            test: /.js?$/,
            loader:'babel-loader',
            exclude: /node_modules/
        },{
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
      }, {
          test:  /\.css$/,
                   use: [
                      'style-loader',
                      'css-loader',
                      'resolve-url-loader',

                     
                    ]
                  }, {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    use:[
                      {
                    loader: 'image-webpack-loader'
                    // This will apply the loader before the other ones
                  }
                ]
              },       
                    {
                    test: /\.(png|jpg|jpeg|gif|)$/,
                    use: [
                      {
                        loader:'url-loader',

                        options: {
                         name: '[name].[ext]',
                          outputPath: 'images/'
                        }
                      }
                    ]
                  },
                  {
                  test: /\.(woff(2)?|ttf|eot|svg|mov|mp4)(\?v=d+\.\d+)?$/,
                  use: [
                    {
                      loader:'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                        
                      }
                    }
                  ]
                }
                ]
              }
                
            
  
    
}