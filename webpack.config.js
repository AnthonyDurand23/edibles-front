const path = require('path');

// Webpack plugins import
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'scripts/[name].[chunkhash].bundle.js',
    clean: true,
    globalObject: 'this',
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.mjs', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif|ico|webp)$/i, // handle images loading
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i, // handle fonts loading
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Edibles',
      lang: 'fr',
      favicon: './src/assets/img/logo_fond_blanc.png',
      template: './src/assets/index.html',
    }),
    new HtmlWebpackTagsPlugin({
      tags: ['serviceWorker.js', 'subscribe.js'],
      append: true,
      publicPath: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/scripts/serviceWorker.js',
          to: 'serviceWorker.js',
        },
        {
          from: 'src/assets/scripts/subscribe.js',
          to: 'subscribe.js',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/styles.css',
      chunkFilename: 'styles.css',
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
    new BundleAnalyzer({
      openAnalyzer: false,
    }),
    new Dotenv({
      path: './.env',
      systemvars: true,
    }),
  ],
  performance: {
    hints: false,
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.js.gz');
    },
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules\/.*/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  devtool: this.mode === 'production' ? 'source-map' : 'inline-source-map',
  devServer: {
    https: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    static: './',
  },
};
