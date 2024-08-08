angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, $http) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];
    
    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (response) {
            console.log("Resposta do servidor:", response.data);
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };

    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
            console.log("Contatos carregados:", response.data);
        })
    };

    var carregarOperadoras = function () {
        $http.get("http://localhost:3000/operadoras").then(function (response, data) {
            $scope.operadoras = response.data;
            console.log("Operadoras carregadas: ", response.data);
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
carregarContatos();
carregarOperadoras();
});