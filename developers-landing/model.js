module.exports = function(staticContent, data) {

    return {
        staticContent: staticContent || {
            title: '',
            subtitle: '',
            app: {}
        },
        data: JSON.stringify(data || {
            developers: []
        })
    };

};
