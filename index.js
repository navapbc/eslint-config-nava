module.exports = {
  extends: ['standard', 'standard-react'],
  rules: {
    /*
      Nava-specific rules
    */
    'no-alert': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/valid-params': 'error'
  }
}
