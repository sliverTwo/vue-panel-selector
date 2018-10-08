import vuePanelSelector from './vue-panel-selector.vue'; // 导入组件
import 'iview/dist/styles/iview.css';
import { Button, Modal } from 'iview';

const panelSelector = {
	install(Vue,options){
		Vue.component(vuePanelSelector.name,vuePanelSelector);
		Vue.component('Button', Button);
		Vue.component('Modal', Modal);
	}
}
// 使用全局组件
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(panelSelector);
}
export default panelSelector // 导出..
