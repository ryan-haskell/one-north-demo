Vue.use(Vuex);

var store = new Vuex.Store({

    state: {

        developers: pugData.developers,

        filterQuery: pugData.filterQuery,

        sortOptions: {
            value: 'firstName',
            ascending: true
        }

    },

    mutations: {

        setFilterQuery: function(state, newFilterQuery) {

            state.filterQuery = newFilterQuery;

        },

        setSortOptionsValue: function(state, sortValue) {

            if (state.sortOptions.value == sortValue) {
                state.sortOptions.ascending = !state.sortOptions.ascending;
            } else {
                state.sortOptions = {
                    value: sortValue,
                    ascending: true
                }
            }

        }

    },

    actions: {

        updateFilterQuery: function(context, newFilterQuery) {

            context.commit("setFilterQuery", newFilterQuery);

        },

        updateSort: function(context, sortValue) {

            context.commit('setSortOptionsValue', sortValue);

        }

    }

});
