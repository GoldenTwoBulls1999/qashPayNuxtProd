// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default withNuxt(
    [{
        ...eslintConfigPrettier,
        rules: {
            'vue/no-multiple-template-root': 'off',
            'vue/html-self-closing': 'off'
        }
    }]
)
