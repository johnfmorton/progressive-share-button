import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

export default defineConfig({
    build: {
        lib: {
            entry: fileURLToPath(new URL('lib/progressive-share-button.ts', import.meta.url)),
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
