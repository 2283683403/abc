import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
import router from './router'
import store from './store'
import '../public/font_3485755_4urfjrfl5qe/iconfont.css'
import '../base.css'
import './permission'
const app = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')

for (const name in ElIcons) {
  app.component(name, ElIcons[name])
}
