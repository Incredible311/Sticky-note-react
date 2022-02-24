module.exports = {
    env: {
        browser: true,
        es6: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true
        }
    },
    plugins: ["react"],
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    rules: {
        eqeqeq: "error",
        "no-invalid-this": "error",
        "no-return-assign": "error",
        "no-unused-expressions": ["error", { allowTernary: true }],
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-use-before-define": "error",
        // ES6
        "arrow-spacing": "error",
        "no-confusing-arrow": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "react/prop-types": 0,
        // Prettier
        "prettier/prettier": ["error", { endOfLine: "auto" }]
    }
}
