const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'lib/progressive-share-button.ts'),
            name: 'progressive-share-button',
            fileName: (format) => `progressive-share-button.${format}.js`,
        },
        minify: false,
    },
})
