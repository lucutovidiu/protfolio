const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withImages = require("next-images");
const webpack = require("webpack");

module.exports = withPlugins([withImages, withSass, withCSS, withFonts], {
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      return config;
    }

    var isProduction = config.mode === "production";
    if (!isProduction) {
      return config;
    }
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        //  maxChunks: 1,
      })
    );

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  }
});

// module.exports = withImages(
//   withFonts(
//     withCSS(
//       withSass({
//         distDir: "_next",
//         webpack(config, options) {
//           // config.module.rules.push({
//           //   test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//           //   use: "raw-loader"
//           // });
//           // if (config.mode === "production") {
//           //   if (Array.isArray(config.optimization.minimizer)) {
//           //     config.optimization.minimizer.push(
//           //       new OptimizeCSSAssetsPlugin({})
//           //     );
//           //   }
//           // }
//           return config;
//         }
//       })
//     )
//   )
// );

/*
{
        distDir: "_next",
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: "raw-loader"
          });
          if (config.mode === "production") {
            if (Array.isArray(config.optimization.minimizer)) {
              config.optimization.minimizer.push(
                new OptimizeCSSAssetsPlugin({})
              );
            }
          }
          return config;
        }
      }
*/
