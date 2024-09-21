angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, operadoras, operadorasAPI, serialGenerator, $location) {
    $scope.app = "Lista Telefonica";
    $scope.operadoras = operadoras.data;

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };
    carregarOperadoras(); 
});

