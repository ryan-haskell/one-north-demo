var fs = require('fs');

module.exports = {

    getDeveloperById: function(id) {

        return this.getAllDevelopers().then(function(developers) {

            var developersWithId =
                developers.filter(function(developer) {

                    return (developer.id === id);

                });

            var developer = developersWithId[0];

            if (developer === undefined) {

                return {};

            } else {

                return developer;

            }

        });

    },

    getAllDevelopers: function() {

        return Promise.resolve(

            JSON.parse(fs.readFileSync("helpers/developers.json"))

        );

    }

};
