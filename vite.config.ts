import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/birthday-present/",
  },

  tanstackStart: {
    server: { entry: "server" },

    prerender: {
      enabled: true,
      autoSubfolderIndex: false,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
    },
  },
});
