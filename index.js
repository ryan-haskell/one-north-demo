var express = require('express'),
    app = express(),
    pug = require('pug');

var developersLanding = require('./developers-landing'),
    developersDetail = require('./developers-detail');

app.set('views', '.');
app.set('view engine', 'pug');

app.get('/', function(req, res) {

    res.redirect('/developers');

});

app.get('/developers', developersLanding.controller);

app.get('/developers/:developerId', developersDetail.controller);

app.listen(3000, function() {

    console.log('Web app ready at port 3000!');

})
