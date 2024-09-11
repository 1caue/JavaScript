angular.module("listaTelefonica").value("config", {
    baseUrl: "http://localhost:3000"
});

angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    var _getContatos = function () {
        return $http.get(config.baseUrl + '/contatos');
    };

    var _saveContato = function (contato) {
        return $http.post(config.baseUrl + '/contatos', contato);
    };

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    }
});
