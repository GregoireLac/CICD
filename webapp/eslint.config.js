export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021, // es2021 is ECMA Version 12
      sourceType: "module",
    },
    env: {
      es6: true,
      es2021: true,
      node: true,
      mocha: true,
    },
    extends: ["eslint:recommended"],
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "no-tabs": ["error"],
      "max-len": [
        "error",
        {
          code: 120,
          tabWidth: 2,
        },
      ],
      "arrow-parens": ["error", "always"],
      "brace-style": ["error", "1tbs", { allowSingleLine: false }],
      "no-inner-declarations": "off",
    },
  },
];
