// import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: 'https://johnfmorton.github.io/progressive-share-button/', /// Set this to './' if your site is deployed at https://<USERNAME>.github.io/<REPO>/.
    build: {
        outDir: 'demo',
        minify: true,
    },
})
