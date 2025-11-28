import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      react,
      prettier
    },
    rules: {
      'prettier/prettier': 'error'
    }
  }
];
