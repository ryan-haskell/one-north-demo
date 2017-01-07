var developersHelper = require('../helpers/developers');
var model = require('./model');

module.exports = function(req, res) {

    developersHelper.getAllDevelopers().then(function(developers) {

        var data = {
            developers: developers
        };

        res.render('developers-landing/view', model(
            'Developers',
            'Look at these nerds.',
            data
        ));

    })

};
