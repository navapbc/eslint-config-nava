module.exports = {
  'rules': {
    'brace-style': [2, '1tbs'],
    'comma-style': [2, 'last'],
    'indent': [2, 2],
    'quotes': [2, 'single'],
    'linebreak-style': [2, 'unix'],
    'new-cap': [2, {
      'newIsCapExceptions': ['baseError']
    }],
    'no-underscore-dangle': [0],
    'no-unneeded-ternary': [0],
    'no-unused-vars': [2, {
      'args': 'none'
    }],
    'semi': [2, 'always'],
    'sort-vars': [2, {
      'ignoreCase': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'strict': [0],
  }
}