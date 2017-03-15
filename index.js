module.exports = {
  extends: ['standard', 'standard-react'],
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    /*
      Standard overrides
    */
    semi: ['error', 'always'], // churn-expensive to enforce
    'space-before-function-paren': ['error', 'never'],

    /*
      Nava-specific rules
    */
    'linebreak-style': ['error', 'unix'],
    'sort-vars': ['error', {ignoreCase: true}],
    'no-alert': 'error'
  }
};
