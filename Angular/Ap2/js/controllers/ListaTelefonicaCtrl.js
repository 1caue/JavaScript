angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, $http, operadoras, operadorasAPI, serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;
    $scope.contato = {
        data: 1093921200000
    };

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (response) {
            console.log("Resposta do servidor:", response.data);
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };

    var generateSerial = function (contatos) {
            contatos.forEach(function (item) {
                    item.serial = serialGenerator.generate();
                });
           };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    generateSerial($scope.contatos);
})
