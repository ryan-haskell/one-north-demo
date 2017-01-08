var developersHelper = require('../helpers/developers');
var model = require('./model');

module.exports = function(req, res) {

    developersHelper.getAllDevelopers().then(function(developers) {

        var staticContent = {
            title: 'Developers',
            subtitle: 'Look at these nerds.',
            filterPlaceholder: 'Find a developer',
            app: {
                title: 'One North | Developers'
            }
        };

        var data = {
            developers: developers,
            filterQuery: (req.query.search) ? req.query.search : ''
        };

        res.render('developers-landing/view',
            model(staticContent, data));

    })

};
