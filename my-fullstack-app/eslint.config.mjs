import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    
    files: ["**/*.{js,mjs,cjs,jsx}"],
    
   
    ...js.configs.recommended,
    
languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
   
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",         
    },

    settings: {
      react: {
        version: "19.0",
      },
    },
  },


  {
    ignores: [
      "**/dist/**", 
      "**/build/**", 
      "node_modules/**", 
      "eslint.config.mjs"
    ],
  },
];