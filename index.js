// http://eslint.org/docs/user-guide/configuring

const off = 'off'

module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],

    camelcase: off,

    'comma-dangle': off,

    'object-curly-spacing': ['error', 'never'],

    'arrow-parens': ['error', 'as-needed'],

    indent: ['error', 2, {
      MemberExpression: 0
    }],

    'no-multi-spaces': ['error', {
      ignoreEOLComments: true
    }],

    'no-extra-semi': 'error',

    'space-before-function-paren': ['error', 'always'],

    'no-use-before-define': ['error', {
      functions: false
    }],

    'func-names': ['error', 'as-needed'],

    // allow ++
    'no-plusplus': off,

    'space-unary-ops': ['error', {
      words: true,
      nonwords: true,
      // a ++
      // a --
      // !a
      // !!a
      overrides: {
        '!': false,
        '!!': false
      }
    }],

    'no-param-reassign': off,

    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
      enforceInMethodNames: false
    }],

    'no-return-assign': off,

    'no-bitwise': off,

    'no-confusing-arrow': off,

    'no-mixed-operators': off,

    'spaced-comment': ['error', 'always', {
      line: {
        // allow this: ///////////////////////////
        exceptions: ['/']
      }
    }],

    // allow this: const a = module.exports = method
    'no-multi-assign': off,

    // allow nested ternary
    'no-nested-ternary': off,

    // allow arrow function without return
    'consistent-return': off,

    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],

    'implicit-arrow-linebreak': off,
    'function-paren-newline': off
  }
}
