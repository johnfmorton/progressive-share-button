const path = require('path')
const { defineConfig } = require('vite')
import banner from 'vite-plugin-banner'
import pkg from './package.json'

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/progressive-share-button.ts'),
            name: 'progressive-share-button',
            fileName: (format) => `progressive-share-button.${format}.js`,
        },
        minify: false,
  },
  define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
  },
  plugins: [
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * repository: ${pkg.repository.url}\n */`
    ),
  ],
})
