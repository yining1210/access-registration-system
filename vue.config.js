module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    devServer: {
        host:'0.0.0.0',
        port: 8081,
        proxy: {
            '/api':{
                target: 'http://1.15.226.9:1210/api',
                // target: 'http://1.15.226.9:1210/',   // ci环境
                changeOrigin: true
            }
        },
    },
    chainWebpack: config => {
        config.entry('main').add('babel-polyfill')
    }
}