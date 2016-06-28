var webpack = require('webpack'),
    ReloadPlugin = require('webpack-reload-plugin'),
    path = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackNotifierPlugin = require('webpack-notifier'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Support for extra commandline arguments
 */
var argv = require('optimist').argv;

/**
 * Useful variables
 */
var cwd = process.cwd();
var DEBUG = !argv.release;
var isDevServer = process.argv.join('').indexOf('webpack-dev-server') > -1;
var version = require(path.resolve(cwd, 'package.json')).version;
var reloadHost = 'localhost';
var npmRoot = __dirname + '/node_modules';
var appDir = __dirname + '/src';

var entry = ['app.ts'];
console.log(appDir+'/static');
if (isDevServer) {
    entry.unshift('webpack-dev-server/client?http://' + reloadHost + ':8080');
}

function makeConfig(options) {
    return {
        cache: true,
        debug: true,
        verbose: true,
        displayErrorDetails: true,
        context: appDir,

        entry: {
            vendor: 'vendor.ts',
            bundle: entry
        },

        stats: {
            colors: true,
            reasons: DEBUG
        },

        devtool: 'source-map',

        recordsPath: path.resolve('.webpack.json'),

        devServer: {
            inline: true,
            colors: true,
            header: {
                "Access-Control-Allow-Origin": "*"
            },
            contentBase: path.resolve(cwd, 'dist'),
            publicPath: '/'
        },

        output: {
            path: path.resolve(cwd, 'dist'),
            filename: '[name].js',
            publicPath: '/',
            chunkFilename: '[id].bundle.js',

            // Hot Module Replacement settings:
            hotUpdateMainFilename: 'updates/[hash].update.json',
            hotUpdateChunkFilename: 'updates/[hash].[id].update.js'
        },

        plugins: [
            new webpack.IgnorePlugin(/spec\.js$/),
            new webpack.optimize.CommonsChunkPlugin('common.js'),
            new ExtractTextPlugin('styles.css'),
            new webpack.DefinePlugin({
                VERSION: JSON.stringify(version),
                ENV: JSON.stringify(options.env)
            }),
            new HtmlWebpackPlugin({
                template: path.join(appDir, './../index.html')
            }),
            new CopyWebpackPlugin([
                {
                    from :appDir+'/static'
                }
            ]),
            new ReloadPlugin(isDevServer ? 'localhost' : ''),
            new WebpackNotifierPlugin({
                title: 'Aries-纬度空间',
                contentImage: path.join(appDir, 'static', 'images', 'logo.png')
            })
        ],
        resolveLoader: {
            root: path.join(__dirname, 'node_modules'),
            modulesDirectories: ['node_modules'],
            fallback: path.join(__dirname, 'node_modules')
        },
        resolve: {
            root: [path.resolve(cwd)],
            modulesDirectories: [
                'node_modules', 'src', 'src/component', '.'
            ],
            extensions: ['', '.ts', '.js', '.json', '.css', '.scss'],
            alias: {
                'src': 'src',
                'scripts': npmRoot
            }
        },
        module: {
            preLoaders: [
                {test: /\.ts$/, loader: 'tslint'}
            ],

            loaders: [
                {test: /\.(png|jpg|gif|ico)$/, loader: 'file-loader?limit=50000&name=[path][name].[ext]'},
                {test: /\.json$/, loader: 'json'},
                {test: /^.*\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')},
                {
                    test: /\.scss$/, loaders: [
                    'raw-loader',
                    'style-loader',
                    ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap'),
                    'sass-loader' +
                    '?outputStyle=expanded&' +
                    'root=' + appDir + '&' +
                    '&includePaths[]' + npmRoot + '&' +
                    '&includePaths[]' + appDir
                ]
                },
                {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader'},
                {test: /\.html$/, loader: 'raw'},
                {test: /^index\.html$/, loader: 'file-loader?name=[path][name].[ext]'},
                {test: /\.ts$/, loader: 'ts', exclude: [/test/, /node_modules/]},
                {
                    test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader?mimetype=application/font-woff&name=[path][name].[ext]'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader?mimetype=application/x-font-ttf&name=[path][name].[ext]'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?\??$/,
                    loader: 'file-loader?mimetype=application/vnd.ms-fontobject&name=[path][name].[ext]'
                },
                {
                    test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader?mimetype=application/font-otf&name=[path][name].[ext]'
                },
                {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader'}
            ],
            noParse: [
                /\.min\.js/,
                /vendor\/.*?\.(js|css)$/
            ]
        },
        tslint: {
            emitErrors: false,
            failOnHint: false
        }
    }
}

var config = makeConfig(argv);

module.exports = config;
