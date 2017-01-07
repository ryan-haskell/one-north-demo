var developersHelper = require('../helpers/developers');
var model = require('./model');

module.exports = function(req, res) {

    var developerId = req.params.developerId;

    developersHelper.getDeveloperById(developerId).then(function(developer) {

        res.render('developers-detail/view', model(developer));

    });

};
