var express = require('express'),
    app = express(),
    pug = require('pug');

var homepage = require('./homepage'),
    developersLanding = require('./developers-landing'),
    developersDetail = require('./developers-detail');

pug.filters = {
    'json': function(text, options) {
        return JSON.stringify(text);
    }
};

app.set('views', '.');
app.set('view engine', 'pug');

app.get('/', homepage.controller);

app.get('/developers', developersLanding.controller);

app.get('/developers/:developerId', developersDetail.controller);

app.listen(3000, function() {

    console.log('Web app ready at port 3000!');

})
