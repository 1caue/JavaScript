angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator, $location) {
    $scope.app = "Lista Telefonica";
    $scope.operadoras = [];

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        }).catch(function (error) {
            console.log("Erro ao carregar operadoras: ", error)
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        }).catch(function (error) {
            console.log("Erro ao salvar contato ", error)
        });
    };
    carregarOperadoras(); 
});

