var developersHelper = require('../helpers/developers');
var model = require('./model');

module.exports = function(req, res) {

    var developers = developersHelper.getAllDevelopers();

    res.render('developers-landing/view', model(
        'Developers',
        'Look at these nerds.',
        developers
    ));

};
