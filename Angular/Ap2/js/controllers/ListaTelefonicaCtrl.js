angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, $http, operadorasAPI, serialGenerator) {
    console.log(serialGenerator.generate());
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

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

    var carregarContatos = function () {
        contatosAPI.getContatos()
            .then(function (response) {
                response.data.forEach(function (item) {
                    item.serial = serialGenerator.generate();
                });
                $scope.contatos = response.data;
                console.log("Contatos carregados:", response.data);
            })
            .catch(function (data, status) {
                $scope.error = "Não foi possivel carregar os dados!";
                console.error("Erro ao carregar contatos:", error);
            });
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response, data) {
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