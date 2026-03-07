import type { Config } from "prettier";

const config = {
  importOrder: ["<BUILT_IN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^#.*$"],
  importOrderParserPlugins: ["typescript", "importAttributes"],
  importOrderTypeScriptVersion: "5.0.0",
  plugins: ["@prettier/plugin-oxc", "@ianvs/prettier-plugin-sort-imports"],
} satisfies Config;

export default config;
