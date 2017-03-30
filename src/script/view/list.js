import template from '../../view/list.html';
// import listModel from '../model/list';
// import listController from '../controller/list';
import {intword} from 'journalize';
import {sheets} from '../../data/sheets.json';

//listModel.actions = listController;

export default {
	data() {
		return {
			list: sheets.shared_reductions
		};
	},
    // vuex: listModel,
    render: template.render,
    staticRenderFns: template.staticRenderFns,
    created() {
    	console.log(sheets.shared_reductions);
    	// this.load();
    },
    methods: {
    	moneyFormat(n) {
    		return '$' + intword(parseInt(n.replace(/,/g,'').replace('$','')));
    	}
    }
};
