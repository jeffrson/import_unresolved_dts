module.exports = {
    env: {
        node: true
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        //        'import'
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:import/typescript',
    ],
    rules: {
        'import/no-unresolved': 'error'
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        "typescript": {
            "alwaysTryTypes": true
        }
      }
    }
}
