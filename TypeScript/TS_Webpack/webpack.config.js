//引入包
const path =require('path');

//引入html插件 npm i -D html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');

//webpack中所有的配置信息都应该写在model.exports中
module.exports = {

    //指定入口文件
    entry:"./src/index.ts",

    //指定打包文件所在目录
    output:{
        //指定打包文件目录
        path:path.resolve(__dirname,'dist'),

        //打包后的文件
        filename:'bundle.js',
    },

    //指定webpack打包时要使用的模块
    module:{
        //指定要加载的规则
        rules:[
            {
                //test指定的是规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:'ts-loader',
                //要排除的文件
                exclude:/_cacache && node_modules/
            }
        ]
    },

    //配置webpack插件
    plugins:[
        new HTMLWebpackPlugin({
            title:"自定义标题",
            //根据模板来生成
            // template:'./src/index.html'
        }),
    ],


    mode:"production"
}