Vue.component('v-oauth', {

    inherit: true,
    replace: true,

    template: '#template-oauth',

    ready: function () {
        if (Vue.util.isArray(this.option['oauth'].provider)) {
            this.option['oauth'].$delete('provider');
            this.option['oauth'].$add('provider', {});
        }
        this.oauth.sort();
    },

    methods: {
        addProvider: function (provider) {
            this.option['oauth'].provider.$add(provider, {'client_id': '', 'client_secret': ''});
        },
        removeProvider: function (provider) {
            this.option['oauth'].provider.$delete(provider);
        }
    },
    filters: {
        configured: function (services) {
            var results = [],
                self = this;

            services.forEach(function (service) {
                if (!self.option['oauth'].provider.hasOwnProperty(service)) {
                    results.push(service);
                }
            });
            return results;
        }
    }
});