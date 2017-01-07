module.exports = {

    getDeveloperById: function(id) {

        return this.getAllDevelopers().then(function(developers) {

            var developersWithId = developers.filter(function(
                developer) {

                return (developer.id === id);

            });

            var developer = developersWithId[0];

            if (developer === undefined) {

                return {
                    name: 'Nobody',
                    favoriteLanguage: 'Nothing',
                    gender: 'neither'
                };

            } else {

                return developer;

            }

        });

    },

    getAllDevelopers: function() {

        return Promise.resolve([

            {
                id: 'ryan-haskell-glatz',
                name: 'Ryan Haskell-Glatz',
                role: 'Associate Developer',
                image: 'http://onenorth.blob.core.windows.net/keystone/ryan2.png'
            },

            {
                id: 'erik-carron',
                name: 'Erik Carron',
                role: 'Developer',
                image: 'http://onenorth.blob.core.windows.net/keystone/Erik-Carron_BW_Cropped.jpg'
            },

            {
                id: 'emma-birdsong',
                name: 'Emma Birdsong',
                role: 'Associate Developer',
                image: 'http://onenorth.blob.core.windows.net/keystone/emma2.png'
            },

            {
                id: 'alex-hawley',
                name: 'Alex Hawley',
                role: 'Technical Lead',
                image: 'http://onenorth.blob.core.windows.net/keystone/Alex_Hawley.jpg'
            }

        ]);

    }

};
