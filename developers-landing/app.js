var vm = new Vue({

    el: '#app',

    store: store,

    computed: {

        developers: function() {

            return this.$store.state.developers;

        },

        filterQuery: function() {

            return this.$store.state.filterQuery;

        },

        sortOptions: function() {

            return this.$store.state.sortOptions;

        },

        displayedDevelopers: function() {

            var developers = this.developers;

            var filteredDevelopers =
                developers.filter(this.filterDevelopers);

            var filteredAndSortedDevelopers =
                filteredDevelopers.sort(this.sortDevelopers);

            return filteredAndSortedDevelopers;

        }

    },

    methods: {

        filterDevelopers: function(developer) {

            var lowercaseName = this.getFullName(developer).toLowerCase();
            var lowercaseQuery = this.filterQuery.toLowerCase();

            return lowercaseName.indexOf(lowercaseQuery) > -1;

        },

        sortDevelopers: function(a, b) {

            var LT = -1,
                GT = 1,
                EQ = 0;
            var value = this.sortOptions.value,
                ascending = this.sortOptions.ascending;

            var aVal = a[value];
            var bVal = b[value];

            if (aVal < bVal)
                return (ascending) ? LT : GT;
            else if (aVal > bVal)
                return (ascending) ? GT : LT;
            else
                return EQ;

        },

        onFilterQueryInput: function(filterQuery) {

            this.updateUrl(filterQuery);

            this.$store.dispatch('updateFilterQuery', filterQuery);

        },

        updateUrl: function(value) {

            if (value.length == 0) {

                window.history.replaceState({}, 'Developers',
                    '/developers');

            } else {

                window.history.replaceState({}, 'Developers',
                    '/developers?search=' + value);

            }

        },

        getFullName: function(developer) {

            return developer.firstName + ' ' + developer.lastName;

        }

    },

    created: function() {
        console.log('Received ' + this.developers.length +
            ' developers.');
    }

});
