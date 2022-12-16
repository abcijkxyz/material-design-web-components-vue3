import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    viteCompression({
      //gzip压缩
      verbose: true,
      disable: false,
      threshold: 10240, //文件大小超出 10kb 才压缩
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  base: './',
  build: {
    // 文件大小限制为 500kb
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        //静态资源分类打包
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          //静态资源分拆打包
          if (id.includes('node_modules')) {
            // Solution 1  一般默认打包方式
            // return id.split('node_modules/')[1].split('/')[0]

            // Solution 2 针对  @material-[hash].js 特别处理，满足文件拆分小于 500kb
            var path = id.split('node_modules/')[1].split('/')
            // console.log(path)
            if (path[0] == '@material' && path[1].includes('mwc-')) {
              // 根据实际情况分析，文件大小如果控制在 300kb 以下,需要拆分为 3 个文件，
              return path[0] + '-mwc' // + (path[1].length % 3)
            } else {
              return path[0]
            }
          }
        },
      },
    },
  },
})
