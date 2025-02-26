module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      },
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@features', './src/features'],
          ['@styles', './src/styles'],
          ['@hooks', './src/hooks'],
          ['@utils', './src/utils'],
          ['@context', './src/context'],
          ['@data', './src/data']
        ],
        extensions: ['.js', '.jsx']
      }
    }
  }
};