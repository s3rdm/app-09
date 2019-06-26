module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'version': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: [
    'prettier',
    'react',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-undef': 0,
  },
};
