// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set the base path to './' to ensure relative paths for all assets
  base: './',

  plugins: [react()],

  build: {
    // Specify the output directory for built files
    outDir: 'dist',
    // Generate manifest file (optional but can be helpful for debugging)
    manifest: true,
    rollupOptions: {
      // If needed, specify how to handle output filenames, chunking, etc.
      output: {
        // Ensures files are named with a hash for cache-busting
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },

  server: {
    // Set up the development server to run on localhost and avoid port conflicts
    host: '127.0.0.1',
    port: 3000, // Change to any available port if needed
  },

  resolve: {
    alias: {
      // Add any path aliases if necessary (e.g., @components for src/components)
      '@': '/src',
    },
  },
});

