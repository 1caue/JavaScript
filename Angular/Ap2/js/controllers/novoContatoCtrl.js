angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, operadoras, serialGenerator, $location) {
    console.log("a",operadoras.data);
    $scope.operadoras = operadoras.data;

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

});

