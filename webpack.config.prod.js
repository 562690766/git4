// const merge = require('webpack-merge');
const { merge } = require("webpack-merge");
const base =require("./webpack.config.base")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports =merge(base,{
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            filename:'css/[name]-[hash].css',
            chunkFilename:'[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // 是开发者模式吗？是就用style-loader，不是就不用--并打包成独立文件
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            modules:false,
                            publicPath:'../'
                        }
                    },
                    /* {
                        loader:'css-loader',
                        options:{
                            modules:true,
                        }
                    } */
                ]
            }, {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                }, {
                    loader: 'less-loader'// compiles Less to CSS
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles sass to CSS
                }]
            },
        ]
    },
    optimization: {//webpack打包进行优化
        minimize: true, //使用 TerserPlugin 压缩js,默认true
        minimizer: [   //自定义 TerserPlugin压缩
          new TerserPlugin({
            cache: true, //缓存 优化速度
            parallel: true //多线程
          }),
          new OptimizeCSSAssetsPlugin({})  //css压缩
        ]
      },
});