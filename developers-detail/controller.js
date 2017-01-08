var developersHelper = require('../helpers/developers');
var model = require('./model');

module.exports = function(req, res) {

    var developerId = req.params.developerId;

    developersHelper.getDeveloperById(developerId)
        .then(function(developer) {

            var content = {
                developer: developer
            };

            var data = {};

            var app = {
                title: 'One North | ' + (developer.firstName +
                    ' ' + developer.lastName)
            };

            res.render('developers-detail/view',
                model(content, data, app));

        });

};
