const withSass = require('@zeit/next-sass')
module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        camelCase: 'dashes',
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    sassLoaderOptions: {
        includePaths: ["node_modules", "./node_modules"],
    }
})