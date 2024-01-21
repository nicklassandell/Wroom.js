import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        modulePreload: false,
        lib: {
            entry: resolve(__dirname, 'lib/wroom.ts'),
            name: 'WroomJS',
            fileName: 'wroom',
            formats: ['es', 'umd', 'iife'],
        },
    }
});
