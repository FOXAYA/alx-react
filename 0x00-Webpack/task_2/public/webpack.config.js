const path = require('path');

module.exports = {
  mode: 'production', // Set mode to production
  entry: './js/dashboard_main.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Regex for .css files
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Regex for image files
        use: [
          {
            loader: 'file-loader', // Loader for images
            options: {
              name: '[path][name].[ext]', // Maintain original file names
              outputPath: 'assets/', // Output directory for images
            },
          },
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              pngquant: {
                quality: [0.75, 0.90],
                speed: 4,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'], // Resolve these extensions
  },
  performance: {
    hints: false, // Disable performance hints for asset size limits
  },
};

