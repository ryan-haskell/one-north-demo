Vue.component('developerTile', {

    template: '#developerTileTemplate',

    props: ['developer'],

    computed: {

        fullName: function() {
            return this.developer.firstName + ' ' + this.developer.lastName;
        }

    }

});
