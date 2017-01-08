var developersHelper = require('../helpers/developers');
var model = require('./model');

module.exports = function(req, res) {

    developersHelper.getAllDevelopers().then(function(developers) {

        var content = {
            title: 'Developers',
            subtitle: 'Look at these nerds.',
            filterPlaceholder: 'Find a developer'
        };

        var data = {
            developers: developers,
            filterQuery: (req.query.search) ? req.query.search : ''
        };

        var app = {
            title: 'One North | Developers'
        };

        res.render('developers-landing/view',
            model(content, data, app));

    })

};
