module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://apis.juhe.cn',
                changeOrigin: true,
                pathRewrite: { // pathRewrite 重写路径
                    "^/api": ""
                }
            },
            '/sina': {
                target: 'https://interface.sina.cn',
                changeOrigin: true,
                pathRewrite: { // pathRewrite 重写路径
                    "^/sina": ""
                }
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/covid19' : '/'
}