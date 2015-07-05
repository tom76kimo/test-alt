module.exports = function (grunt) {
    grunt.initConfig({
        webpack: {
            main: {
                entry: './index.js',
                output: {
                    path: __dirname,
                    filename: 'bundle.js'
                },
                stats: {
                    colors: true,
                    module: true
                },
                module: {
                    loaders: [
                        {test: /\.css$/, loader: 'style!css'},
                        {
                            test: /\.jsx?$/,
                            exclude: /(node_modules|bower_components)/,
                            loader: 'babel'
                        }
                    ]
                },
                watch: true,
                keepalive: true
            }
        }
    });
    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('default', ['webpack:main']);
};