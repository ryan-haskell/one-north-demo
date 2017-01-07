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
                image: 'http://onenorth.blob.core.windows.net/keystone/ryan2.png'
            },

            'erik': {
                name: 'Erik Carron',
                favoriteLanguage: 'Elm',
                image: 'http://onenorth.blob.core.windows.net/keystone/Erik-Carron_BW_Cropped.jpg'
            },

            'emma': {
                name: 'Emma Birdsong',
                favoriteLanguage: 'C#',
                image: 'http://onenorth.blob.core.windows.net/keystone/emma2.png'
            }

        };

    }

};
