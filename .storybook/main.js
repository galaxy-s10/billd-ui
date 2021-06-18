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
      // test: /.*\.(?:le|sc)ss$/, //之前cv网上的，而且网上的写漏了一个s，导致匹配了less或者css，重复匹配了css就报错了！
      test: /.less$/, //之前cv网上的，而且网上的写漏了一个s，导致匹配了less或者css，重复匹配了css就报错了！
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
