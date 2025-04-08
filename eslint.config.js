import tsParser from "@typescript-eslint/parser"; // モジュールをオブジェクトとしてインポート
import eslintPluginReact from "eslint-plugin-react";

export default [
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser, // 文字列ではなく、実際のパーサーオブジェクト
            parserOptions: {
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        plugins: {
            react: eslintPluginReact,
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
        },
    },
];
