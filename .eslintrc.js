module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    // 'plugin:prettier/recommended', // 兼容prettier
  ],
  rules: {
    // 0 => off
    // 1 => warn
    // 2 => error
    'no-unused-vars': 0,
    quotes: ['warn', 'single'], // Strings must use singlequote，否则报warn
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'import/newline-after-import': 'off', // Expected 1 empty line after import statement not followed by another import
  },
};
