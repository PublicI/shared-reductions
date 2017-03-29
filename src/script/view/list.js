import template from '../../view/list.html';
import listModel from '../model/list';
import listController from '../controller/list';

listModel.actions = listController;

export default {
    vuex: listModel,
    render: template.render,
    staticRenderFns: template.staticRenderFns,
    created() {
    	this.load();
    }
};
