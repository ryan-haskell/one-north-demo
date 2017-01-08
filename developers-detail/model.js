module.exports = function(staticContent, data) {

    return {
        staticContent: staticContent || {
            developer: {},
            app: {}
        },
        data: JSON.stringify(data || {})
    };

};
