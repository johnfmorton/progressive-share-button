// import path from 'path'
import { defineConfig } from 'vite'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

export default defineConfig({
    base: 'https://johnfmorton.github.io/progressive-share-button/', /// Set this to './' if your site is deployed at https://<USERNAME>.github.io/<REPO>/.
    build: {
        outDir: 'demo',
        minify: true,
    },
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
    },
})
