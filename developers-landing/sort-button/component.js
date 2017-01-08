Vue.component('sortButton', {

    template: '#sortButtonTemplate',

    props: ['label', 'value'],

    computed: {

        sortOptions: function() {

            return this.$store.state.sortOptions;

        },

        iconClasses: function() {

            if (this.sortOptions.value == this.value) {
                return (this.sortOptions.ascending) ?
                    'fa fa-sort-alpha-asc' :
                    'fa fa-sort-alpha-desc'
            } else {
                return '';
            }

        }

    },

    methods: {

        sortBy: function() {

            this.$store.dispatch('updateSort', this.value);

        }

    }

});
