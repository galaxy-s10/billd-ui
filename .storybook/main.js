module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/addon-docs",
    // "@storybook/addon-knobs/register",
    "@storybook/addon-controls",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      // this is for both less and scss
      test: /.*\.(?:le|c)ss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: false,
          },
        },
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
    });
    return config;
  },
};
