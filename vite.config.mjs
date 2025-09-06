import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.jsx'],
      refresh: true,
    }),
    react(),
  ],
  optimizeDeps: {
    include: ['warning', 'warning/warning', 'deepmerge', 'deepmerge/dist/cjs.js', 'react-is', 'react-is/cjs/react-is.development.js', 'prop-types', 'hoist-non-react-statics', 'dayjs', 'dayjs/plugin/advancedFormat', 'dayjs/plugin/customParseFormat', 'dayjs/plugin/utc', 'dayjs/plugin/timezone', 'dayjs/plugin/localeData'],  
    exclude: ['@mui/x-date-pickers']
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/storage': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/images': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@mui/material')) {
              return 'vendor-mui';
            }
            if (id.includes('react-vis')) {
              return 'vendor-react-vis';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@emotion')) {
              return 'vendor-emotion';
            }
            return 'vendor';
          }
          if (id.includes('/resources/js/views/Customer/')) {
            return 'customer';
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      
      'hoist-non-react-statics': path.resolve(__dirname, 'node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'),
      'react-is/index.js': path.resolve(__dirname, 'node_modules/react-is/cjs/react-is.development.js'),
      'dayjs/plugin/advancedFormat': 'dayjs/esm/plugin/advancedFormat',
      'dayjs/plugin/customParseFormat': 'dayjs/esm/plugin/customParseFormat',
      'dayjs/plugin/utc': 'dayjs/esm/plugin/utc',
      'dayjs/plugin/timezone': 'dayjs/esm/plugin/timezone',
      'dayjs/plugin/localeData': 'dayjs/esm/plugin/localeData',
      'dayjs/plugin/advancedFormat.js': 'dayjs/plugin/advancedFormat',
      'dayjs/plugin/customParseFormat.js': 'dayjs/plugin/customParseFormat',
      'dayjs/plugin/utc.js': 'dayjs/plugin/utc',
      'dayjs/plugin/timezone.js': 'dayjs/plugin/timezone',
      'dayjs/plugin/localeData.js': 'dayjs/plugin/localeData',
      'dayjs/plugin/weekOfYear.js': 'dayjs/plugin/weekOfYear',
      'dayjs/plugin/localizedFormat.js': 'dayjs/plugin/localizedFormat',
      'dayjs/plugin/isBetween.js': 'dayjs/plugin/isBetween',
      '-assets': path.resolve(__dirname, 'resources/js/assets'),
      '-components': path.resolve(__dirname, 'resources/js/components'),
      '-views': path.resolve(__dirname, 'resources/js/views'),
      '-variables': path.resolve(__dirname, 'resources/js/variables'),
      '-utils': path.resolve(__dirname, 'resources/js/utils'),
      '-color': path.resolve(__dirname, 'resources/js/color'),
      '-config': path.resolve(__dirname, 'resources/js/config'),
      '-const': path.resolve(__dirname, 'resources/js/const'),
    },
  },
})