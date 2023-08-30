import { createPinia } from 'pinia';

// 模块化导入
import useUserStore from './modules/user';

const store = createPinia();

export default store;

export { useUserStore };
