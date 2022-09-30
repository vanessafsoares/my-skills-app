module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    node: true,
    commonjs: true,
    jest: true,
    mocha: true,
    browser: true,
  },
  plugins: [
    'import',
    'react',
    'react-native',
    'detox',
    'testing-library',
    'eslint-plugin-local-rules',
    'prettier',
  ],
};
