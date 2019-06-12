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

    // allow snake cases
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

    // allow: a ^ b
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

    // allow this: `'abc'`
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],

    'implicit-arrow-linebreak': off,
    'function-paren-newline': off,
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    }],

    // No prefer for export
    'import/prefer-default-export': off,
    'import/no-default-export': off,

    // Allow class methods with no this
    'class-methods-use-this': off,

    // Allow all kinds of require
    'global-require': off,
    'import/no-dynamic-require': off,

    'keyword-spacing': 'error',

    'no-restricted-syntax': off,

    // Allow [,,]
    'no-sparse-arrays': off
  }
}
