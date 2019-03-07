module.exports = {
  parserOptions: {
    ecmaVersion: 2017
  },

  env: {
    es6: true,
    node: true
  },

  rules: {
    'strict': 'error',
    'semi': 'error',
    'indent': ['error', 'tab'],
    'no-undef': 'warn',
    'no-global-assign': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'no-trailing-spaces': 'warn',
    'brace-style': 'warn',
    'quotes': ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'no-useless-return': 'error',
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],
  }
}