exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-native', 'import', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off', // desnecessário com React 17+
    'react-native/no-inline-styles': 'off',
    'react-native/split-platform-components': 'off',
    'react-native/no-color-literals': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
