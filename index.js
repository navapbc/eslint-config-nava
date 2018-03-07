module.exports = {
  extends: ['standard', 'standard-react'],
  env: {
    es6: true
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
    'no-alert': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error'
  }
};
