const withSass = require("@zeit/next-sass");
const withCss = require('@zeit/next-css')
const withFonts = require("next-fonts");

// noinspection JSUnusedLocalSymbols
module.exports =
  withFonts(
    withSass(
      withCss({
        webpack: function (config) {
          config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]',
                mimeType: true
              }
            }
          })
          return config
        },
        exportPathMap: function() {
          return {
            '/booty': { page: '/' },
          }
        },
      }))
  );
