const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    watch: isDevelopment,
    devtool: isDevelopment && 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
              },
              {
                test: /\.less$/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      modules: true,
                      localIdentName: '[name]__[hash:base64:5]',
                    },
                  },
                  {
                    loader: 'postcss-loader',
                  },
                  {
                    loader: 'less-loader',
                  },
                ],
              },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        })
    ]
};
