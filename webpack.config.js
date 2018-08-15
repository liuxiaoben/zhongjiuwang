

// 实现项目工程模块化  
// 打包JS  bundle
//  模块化 scss / less /css
// 模块打包 png/jpg/svg/iconfont
// 模块打包 单文件组件 app.vue 


const path = require("path");   // node  模块 
const webpack = require("webpack");
const htmlWebpackPlugin= require("html-webpack-plugin");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");  // 抽离CSS
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");



module.exports = {
    entry:["./src/index.js"],
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[hash:8].js",  // 时间戳 生成 8长度的hash 算法的名称 防止缓存
        publicPath:"" ,   // 公共目录   index.html 自动引入的 公共目录  /app  上线地址 
    },

    devtool:"source-map",  // 方便调试

    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname,'node_modules'),  // 排除node_modules 
                use:["babel-loader"]
            },
            {
                test:/\.(png|gif|svg|jpg|woff|woff2|eot|ttf)\??.*$/, //打包 图片 iconfont
                use:["url-loader?limit=8192&name=font/[hash:8].[name].[ext]"] 
            },
            {
                test:/\.(css|scss)/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  // 转为 node 风格 的代码
                    use:['css-loader',   // 变成 JS 模块
                        {
                            loader:"postcss-loader",   // 转为css 代码
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),   // 美化代码 
                                        require("postcss-px2rem-exclude")({
                                            remUnit:100,
                                            exclude:/antd-mobile/i    // 忽视  antd  库
                                        }),
                                        require("autoprefixer")()  // 自动补全 
                                    ]
                                }
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test:/\.(css|less)/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  // 转为 node 风格 的代码
                    use:['css-loader',   // 变成 JS 模块
                        {
                            loader:"postcss-loader",   // 转为css 代码
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),   // 美化代码 
                                        require("postcss-px2rem-exclude")({
                                            remUnit:100,
                                            exclude:/antd-mobile/i    // 忽视  antd 库
                                        }),
                                        require("autoprefixer")()  // 自动补全 
                                    ]
                                }
                            }
                        },
                        "less-loader"
                    ]
                })
            }
        ]
    },

    // dev-server 
    // 配置 项目开发的服务器  webpack-dev-server
    devServer:{
        contentBase:path.join(__dirname,"dist"), // 服务器 启动在 dist 目录
        compress:true,
        hot:true,
        open:true,
        host:"localhost",   // 主机
        port:7000,   // 端口
        publicPath:"",
        historyApiFallback:true,  // html5 history api 
        disableHostCheck:true
    },

    resolve:{
        alias:{   // 别名
            "react":path.join(__dirname,"node_modules","react")
        }
    },

    // webpack 插件  
    plugins:[

        new htmlWebpackPlugin({
            template:"./src/index.html",  // 指定编译的html 模板
            inject:true    // 自动注入引入的 css/js 
        }),

        new extractTextWebpackPlugin({
            filename:"css/app.[hash:8].css",
            allChunks:true,    // 获取全部数据
            disable:false
        }),

        new openBrowserWebpackPlugin({
            url:"http://localhost:7000"
        }),

        new webpack.HotModuleReplacementPlugin()    //  实现模块热替换 热更新
    ]
}


