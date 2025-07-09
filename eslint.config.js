import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';


export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "semi": "error",
      "import/newline-after-import": [ "error", { "count": 2 } ],
      "no-multiple-empty-lines": [2, {"max": 2}],
      "eol-last": 2,
      "@eslint-react/naming-convention/filename": ["warn", { "rule": "kebab-case" }],
    },
  },
])
