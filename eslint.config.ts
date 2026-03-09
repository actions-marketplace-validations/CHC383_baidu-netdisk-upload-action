import eslintjs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { flatConfigs as eslintPluginImportXConfigs } from "eslint-plugin-import-x";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { configs as tseConfigs } from "typescript-eslint";

export default defineConfig(
  globalIgnores(["node_modules/*", "dist/*"]),
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            "eslint.config.ts",
            "prettier.config.ts",
            "rollup.config.ts",
          ],
        },
        tsconfigRootDir: import.meta.dirname,
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
      },
    },
  },
  eslintjs.configs.recommended,
  tseConfigs.recommendedTypeChecked,
  tseConfigs.stylisticTypeChecked,
  // @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/11543
  eslintPluginImportXConfigs.recommended,
  eslintPluginImportXConfigs.typescript,
  eslintPluginUnicorn.configs.recommended,
  eslintConfigPrettier,
);
