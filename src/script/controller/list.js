
export default {
    load(store) {
        fetch('sheets.json')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                store.dispatch('setList',json.sheets.shared_reductions);
            }).catch(function(err) {
                console.error('JSON parsing failed', err);
            });
    }
};
