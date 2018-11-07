var webpack = require('webpack');
var path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');




module.exports = merge(common, {
    mode:'development',
   devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        port:8080,
        historyApiFallback:true,   //this ensures the site goes back to root to load react router from home page
        proxy: {
            "/api/users/**" :{
                target:"http://localhost:5000", 
                secure:"false" 
             },
             "/api/site/**" :{
                 target:"http://localhost:5000",
                 secure:"false"
             },
            "/api/messages/**" :{
                target:"http://localhost:5000",
                secure:"false"
            },
            "/api/manager/**" :{
                target:"http://localhost:5000",
                secure:"false"
            },
            "/api/sports/**" :{
                target:"http://localhost:5000",
                secure:"false"
            },
            "/api/wellbeing/**" :{
                target:"http://localhost:5000",
                secure:"false"
            }
          
           
          }

    }
   
})