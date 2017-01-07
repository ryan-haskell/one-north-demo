module.exports = {

    getDeveloperById: function(id) {

        var developers = this.getAllDevelopers();

        var developer = developers[id];

        if (developer === undefined) {

            return {
                name: 'Nobody',
                favoriteLanguage: 'Nothing',
                gender: 'neither'
            };

        } else {

            return developer;

        }

    },

    getAllDevelopers: function() {

        return {

            'ryan': {
                name: 'Ryan Haskell-Glatz',
                favoriteLanguage: 'Elm',
                gender: 'male'
            },

            'erik': {
                name: 'Erik Carron',
                favoriteLanguage: 'Elm',
                gender: 'male'
            },

            'emma': {
                name: 'Emma Birdsong',
                favoriteLanguage: 'C#',
                gender: 'female'
            }

        };

    }

};
