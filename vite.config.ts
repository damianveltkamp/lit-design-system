import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type UserConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src"),
      name: "MyLib",
      formats: ["es"],
    },
    rollupOptions: {
      input: {
        button: resolve(__dirname, "src/components/button/button.ts"),
        header: resolve(__dirname, "src/components/header/header.ts"),
        user: resolve(__dirname, "src/components/user/user.ts"),
      },
      output: {
        format: "es",
        preserveModules: true,
        inlineDynamicImports: false,
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
      outDir: "dist/src/types",
      strictOutput: true,
      tsconfigPath: "tsconfig.json",
      insertTypesEntry: false,
      exclude: ["**/*.stories.ts", "**/*.stories.tsx"],
    }),
  ],
}) satisfies UserConfig;
