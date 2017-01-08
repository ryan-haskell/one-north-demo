module.exports = function(content, data, app) {

    app = (app != undefined) ? app : {};

    app.production = (process.env.NODE_ENV === 'PRODUCTION');

    return {
        content: content || {
            title: '',
            subtitle: '',
            filterPlaceholder: ''
        },
        data: JSON.stringify(data || {
            developers: [],
            filterQuery: ''
        }),
        app: app
    };

};
