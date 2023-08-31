import { createApp } from 'vue';
import './styles/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

//使用路由
app.use(router);

// 挂载pinia实例
app.use(store);

app.mount('#app');
