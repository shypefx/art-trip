import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
    jsxInject: `import React from 'react'`,
    jsx: 'automatic',
    include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx']
});
