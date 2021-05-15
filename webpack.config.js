const path = require('path');
const outputPath = path.join(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'scripts/scripts.js',
    path: outputPath,
  },
  devServer: {
    contentBase: outputPath,
    open: true,
    inline: true,
    port: 3000,
    host: '0.0.0.0',
    public: 'localhost:3000',
    progress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.module\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]__[local]--[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      },
      {
        test: /favicon.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      },
      {
        test: /\.(woff2|woff|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devtool: 'source-map',
};
