const path = require('path');

module.exports = {
    mode: 'production', // Set to production
    entry: './js/dashboard_main.js', // Entry point for your JS file
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'public'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Process JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/, // Process CSS files
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Process image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // Preserve original path and name
                        },
                    },
                ],
            },
		 {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
        ],
    },
    optimization: {
        // Optimization settings can be added here if necessary
    },
};

