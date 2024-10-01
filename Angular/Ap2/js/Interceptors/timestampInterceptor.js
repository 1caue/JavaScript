angular.module("listaTelefonica").factory("timestampIntercetor", function () {
    return {
        request: function (config) {
            console.log(config)
            return config;
        }
    };
});