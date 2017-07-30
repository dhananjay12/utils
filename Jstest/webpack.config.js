const {resolve}= require('path')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')
const webpack = require('webpack')

module.exports = (env) => {
   return {
       entry: {
           app: './app.js'
       },
       output :{
           path : resolve('./'),
           filename:'bundle.js',
       },
       module: {
           loaders:[
               {test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
               {test: /\.html$/, loaders: ['raw-loader'] },
                {
                test: /\.js?/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {modules: false}]
                        ],
                    }
                },
                exclude: /node_modules/
            },
           ]
       },
       devtool:'source-map',
       plugins: removeEmpty([
           
       ])
   }
}