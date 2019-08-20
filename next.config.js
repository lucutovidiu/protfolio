const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withImages = require("next-images");

module.exports = withImages(
  withFonts(
    withCSS(
      withSass({
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
      })
    )
  )
);

/*
{
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        }
      });

      return config;
    }
  }
*/
