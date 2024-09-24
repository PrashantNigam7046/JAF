// craco.config.js
module.exports = {
    webpack: {
      plugins: [
        // Custom plugins if needed
      ],
      configure: (webpackConfig) => {
        // Ensure that process.env is defined correctly
        webpackConfig.plugins.push(
          new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
          })
        );
        return webpackConfig;
      },
    },
  };
  