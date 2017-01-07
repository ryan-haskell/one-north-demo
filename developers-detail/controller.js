var developersHelper = require('../helpers/developers');
var model = require('./model');

module.exports = function(req, res) {

    var developerId = req.params.developerId;
    var developer = developersHelper.getDeveloperById(developerId);

    res.render('developers-detail/view', model(developer));

};
