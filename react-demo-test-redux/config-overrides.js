const { override, addWebpackAlias, fixBabelImports, addLessLoader} = require('customize-cra')
const path = require('path')
module.exports = override (
    addWebpackAlias({
        ['@']: path.resolve(__dirname, 'src')
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            localIdentName: '[local]--[hash:base64:5]'
        }
    })
)