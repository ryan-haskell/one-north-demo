module.exports = function(staticContent, data) {

    return {
        staticContent: staticContent || {
            title: '',
            subtitle: '',
            filterPlaceholder: '',
            app: {}
        },
        data: JSON.stringify(data || {
            developers: [],
            filterQuery: ''
        })
    };

};
