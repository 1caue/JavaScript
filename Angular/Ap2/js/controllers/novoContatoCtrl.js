angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, $http, operadorasAPI, serialGenerator, $location) {
    $scope.contatos = [];
    $scope.operadoras = [];
    $scope.contato = {
        data: 1093921200000
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response, data) {
            $scope.operadoras = response.data;
            console.log("Operadoras carregadas: ", response.data);
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (response) {
            console.log("Resposta do servidor:", response.data);
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };

    carregarOperadoras();
});

