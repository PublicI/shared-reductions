import pym from '../controller/pym';
import template from '../../view/app.html';
import overview from './overview';

export default {
    components: {
        overview: overview
    },
    el: '#sharedReductions',
    render: template.render,
    staticRenderFns: template.staticRenderFns,
    created() {
        pym.init();
    }
};
