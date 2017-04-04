import template from '../../view/list.html';
// import listModel from '../model/list';
// import listController from '../controller/list';
import {sheets} from '../../data/sheets.json';
import {intword} from 'journalize';
import smartquotes from 'smartquotes';

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
    filters: {
        smartQuotes: smartquotes,
        moneyFormat(n) {
            return '$' + intword(parseInt(n.replace(/,/g,'').replace('$','')));
        }
    }
};
