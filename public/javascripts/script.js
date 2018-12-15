Vue.prototype.$http = axios;
var app = new Vue({
    el: '#app',
    data: {
        capteurs : [],
    },
    methods: {

    },
    created() {
        this.$http.get('/capteurs')
            .then((response) => {
                this.capteurs = response.data;
                this.capteurs.forEach(element => {
                    if (parseInt(element.temp) > 20) {
                        element.temp = "PAS DISPO";
                    } else {
                        element.temp = "DISPO";
                    }
                });
            });
        }
});