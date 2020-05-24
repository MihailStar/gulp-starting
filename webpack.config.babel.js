import TerserPlugin from 'terser-webpack-plugin';
import { isDevelopment } from './gulp/configuration';

const development = {
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(dist|node_modules)/,
        test: /\.(js|ts)$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'main.js',
  },
};

const production = {
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /(dist|node_modules)/,
        test: /\.(js|ts)$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /(dist|node_modules)/,
        test: /\.(js|ts)$/,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  output: {
    filename: 'main.js',
  },
};

export default isDevelopment ? development : production;
