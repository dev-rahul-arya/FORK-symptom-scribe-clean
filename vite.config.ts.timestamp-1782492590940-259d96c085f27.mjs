// vite.config.ts
import { defineConfig } from "file:///home/rahularya/Documents/GSSoC/FORK-symptom-scribe-clean/node_modules/vite/dist/node/index.js";
import react from "file:///home/rahularya/Documents/GSSoC/FORK-symptom-scribe-clean/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///home/rahularya/Documents/GSSoC/FORK-symptom-scribe-clean/node_modules/lovable-tagger/dist/index.js";
import { VitePWA } from "file:///home/rahularya/Documents/GSSoC/FORK-symptom-scribe-clean/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "/home/rahularya/Documents/GSSoC/FORK-symptom-scribe-clean";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "apple-touch-icon-180x180.png", "maskable-icon-512x512.png"],
      manifest: {
        name: "Symptom Scribe",
        short_name: "Symptom Scribe",
        description: "AI-powered symptom checker and health tracker.",
        theme_color: "#22d3ee",
        background_color: "#0f172a",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png"
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        navigateFallback: "/index.html"
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  test: {
    /**
     * Use jsdom to simulate a browser DOM environment, which is required for
     * React Testing Library to render components and query the DOM.
     */
    environment: "jsdom",
    /**
     * Run the global setup file before each test suite. This file extends
     * Vitest's `expect` with `@testing-library/jest-dom` matchers.
     */
    setupFiles: ["./src/test/setup.ts"],
    /**
     * Make Vitest globals (describe, it, expect, vi, etc.) available in every
     * test file without explicit imports.
     */
    globals: true,
    /**
     * Collect test coverage from source files (excluding config, types, and
     * test files themselves). Run `npm run test:coverage` to generate a report.
     */
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/test/**",
        "src/vite-env.d.ts",
        "src/main.tsx"
      ],
      reporter: ["text", "html"]
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yYWh1bGFyeWEvRG9jdW1lbnRzL0dTU29DL0ZPUkstc3ltcHRvbS1zY3JpYmUtY2xlYW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3JhaHVsYXJ5YS9Eb2N1bWVudHMvR1NTb0MvRk9SSy1zeW1wdG9tLXNjcmliZS1jbGVhbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9yYWh1bGFyeWEvRG9jdW1lbnRzL0dTU29DL0ZPUkstc3ltcHRvbS1zY3JpYmUtY2xlYW4vdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNvbXBvbmVudFRhZ2dlcigpLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgICAgIGluY2x1ZGVBc3NldHM6IFtcImZhdmljb24uc3ZnXCIsIFwiYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiLCBcIm1hc2thYmxlLWljb24tNTEyeDUxMi5wbmdcIl0sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiBcIlN5bXB0b20gU2NyaWJlXCIsXG4gICAgICAgIHNob3J0X25hbWU6IFwiU3ltcHRvbSBTY3JpYmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQUktcG93ZXJlZCBzeW1wdG9tIGNoZWNrZXIgYW5kIGhlYWx0aCB0cmFja2VyLlwiLFxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjMjJkM2VlXCIsXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiIzBmMTcyYVwiLFxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgc3RhcnRfdXJsOiBcIi9cIixcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwicHdhLTY0eDY0LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNjR4NjRcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJwd2EtMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJwd2EtNTEyeDUxMi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJtYXNrYWJsZS1pY29uLTUxMng1MTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbXCIqKi8qLntqcyxjc3MsaHRtbCxpY28scG5nLHN2Z31cIl0sXG4gICAgICAgIG5hdmlnYXRlRmFsbGJhY2s6IFwiL2luZGV4Lmh0bWxcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICAvKipcbiAgICAgKiBVc2UganNkb20gdG8gc2ltdWxhdGUgYSBicm93c2VyIERPTSBlbnZpcm9ubWVudCwgd2hpY2ggaXMgcmVxdWlyZWQgZm9yXG4gICAgICogUmVhY3QgVGVzdGluZyBMaWJyYXJ5IHRvIHJlbmRlciBjb21wb25lbnRzIGFuZCBxdWVyeSB0aGUgRE9NLlxuICAgICAqL1xuICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXG4gICAgLyoqXG4gICAgICogUnVuIHRoZSBnbG9iYWwgc2V0dXAgZmlsZSBiZWZvcmUgZWFjaCB0ZXN0IHN1aXRlLiBUaGlzIGZpbGUgZXh0ZW5kc1xuICAgICAqIFZpdGVzdCdzIGBleHBlY3RgIHdpdGggYEB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21gIG1hdGNoZXJzLlxuICAgICAqL1xuICAgIHNldHVwRmlsZXM6IFtcIi4vc3JjL3Rlc3Qvc2V0dXAudHNcIl0sXG4gICAgLyoqXG4gICAgICogTWFrZSBWaXRlc3QgZ2xvYmFscyAoZGVzY3JpYmUsIGl0LCBleHBlY3QsIHZpLCBldGMuKSBhdmFpbGFibGUgaW4gZXZlcnlcbiAgICAgKiB0ZXN0IGZpbGUgd2l0aG91dCBleHBsaWNpdCBpbXBvcnRzLlxuICAgICAqL1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogQ29sbGVjdCB0ZXN0IGNvdmVyYWdlIGZyb20gc291cmNlIGZpbGVzIChleGNsdWRpbmcgY29uZmlnLCB0eXBlcywgYW5kXG4gICAgICogdGVzdCBmaWxlcyB0aGVtc2VsdmVzKS4gUnVuIGBucG0gcnVuIHRlc3Q6Y292ZXJhZ2VgIHRvIGdlbmVyYXRlIGEgcmVwb3J0LlxuICAgICAqL1xuICAgIGNvdmVyYWdlOiB7XG4gICAgICBwcm92aWRlcjogXCJ2OFwiLFxuICAgICAgaW5jbHVkZTogW1wic3JjLyoqLyoue3RzLHRzeH1cIl0sXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgIFwic3JjLyoqLyoudGVzdC57dHMsdHN4fVwiLFxuICAgICAgICBcInNyYy90ZXN0LyoqXCIsXG4gICAgICAgIFwic3JjL3ZpdGUtZW52LmQudHNcIixcbiAgICAgICAgXCJzcmMvbWFpbi50c3hcIixcbiAgICAgIF0sXG4gICAgICByZXBvcnRlcjogW1widGV4dFwiLCBcImh0bWxcIl0sXG4gICAgfSxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsZUFBZTtBQUx4QixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxJQUMxQyxRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSxnQ0FBZ0MsMkJBQTJCO0FBQUEsTUFDMUYsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsU0FBUztBQUFBLFFBQ1QsV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLGNBQWMsQ0FBQyxnQ0FBZ0M7QUFBQSxRQUMvQyxrQkFBa0I7QUFBQSxNQUNwQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtKLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS2IsWUFBWSxDQUFDLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLbEMsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLVCxVQUFVO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsbUJBQW1CO0FBQUEsTUFDN0IsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVLENBQUMsUUFBUSxNQUFNO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
