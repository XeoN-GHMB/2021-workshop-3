import path from "path";
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import visualizer from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/

const APPNAME = "app"
export default defineConfig(({command, mode})=>{
  let conf = {
      plugins: [
          visualizer(
              {
                  template:"network"
              }
          ),
          copy({
              targets: [
                  {
                      src: path.join(__dirname, "index.html"),
                      dest: path.join(__dirname, 'html')
                  }
              ],
              hook:"buildStart"
          }),
          copy({
              targets: [
                  {
                      src: path.join(path.dirname(require.resolve('@viur/viur-shoelace/dist/shoelace.js')), "assets"),
                      dest: path.join(__dirname, 'public','static',APPNAME, "viur-shoelace")
                  }
              ]
          }),
          vue({
              template: {
                  compilerOptions: {
                      isCustomElement: tag => tag.startsWith('sl-')
                  }
              }
          })
      ],
      resolve: {
          alias: {
              "@": path.resolve(__dirname, "./src")
          }
      },
      build: {
          "outDir": "../../deploy",
          "emptyOutDir":false,
          "assetsDir": `static/${APPNAME}`,
          "assetsInlineLimit": 0,
          "chunkSizeWarningLimit": 700,
          rollupOptions: {
              input:{
                  index: path.resolve(__dirname, 'html/index.html'),
              }
          }
      }
  }

  return conf
})