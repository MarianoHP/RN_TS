module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'linebreak-style': ['error', 'unix'],
        'no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        indent: ['error', 4, {SwitchCase: 1}],
        quotes: ['error', 'single', {avoidEscape: true}],
        semi: ['error', 'always'],
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
                typedefs: true,
            },
        ],
        'prettier/prettier': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
