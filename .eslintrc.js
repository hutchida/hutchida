module.exports = {
  root: true,
  extends: ['airbnb-typescript', 'prettier', 'plugin:storybook/recommended'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  rules: {
    'no-console': 'error',
    'react/no-danger': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['warn'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  plugins: ['import', 'react'],
};
