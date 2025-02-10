import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import stylisticJs from '@stylistic/eslint-plugin-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/quotes': ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'eol-last': ['error', 'always'],
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            ['internal', 'unknown'],
            'parent',
            'sibling',
            'index',
            'object',
          ],
          'newlines-between': 'always',
          'alphabetize': {
            'order': 'asc',
            'caseInsensitive': false,
          },
        },
      ],
      'indent': ['error', 2],
      'keyword-spacing': ['error'],
      'key-spacing': ['error'],
      'object-curly-spacing': ['error', 'always'],
      'semi': ['error'],
    },
  },
];

export default eslintConfig;
