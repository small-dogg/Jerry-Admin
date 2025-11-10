module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended', 'plugin:react/jsx-runtime', 'prettier'],
  plugins: ['react-refresh'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  },
  ignorePatterns: ['dist', 'coverage']
};
