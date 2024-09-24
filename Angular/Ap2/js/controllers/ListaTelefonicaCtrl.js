angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosRes, operadorasRes, serialGenerator, contatosAPI, operadorasAPI) {

    contatosAPI.getContatos().then(function(response) {
        console.log("Contatos recebidos:", response.data);
    });

    operadorasAPI.getOperadoras().then(function(response) {
        console.log("Operadoras recebidas:", response.data);
    });


    console.log("contatos carregados", contatosRes);
    console.log("operadoras carregadas", operadorasRes);

    $scope.app = "Lista Telefonica";
    $scope.contatos = contatosRes.data; 
    $scope.operadoras = operadorasRes.data;

    var carregarContatos = function() {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
        });
    };
    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data) {
            $scope.operadoras = data;
        });
    };


    var generateSerial = function (contatos) {
        contatos.forEach(function (item) {
            item.serial = serialGenerator.generate();
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (response) {
            console.log("Resposta do servidor:", response.data);
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();  // Recarrega os contatos após adicionar um novo
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
});
