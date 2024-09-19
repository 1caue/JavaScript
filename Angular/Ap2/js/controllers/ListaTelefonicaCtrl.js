angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator, contatosAPI) {

    console.log("contatos carregados", contatos);
    console.log("operadoras carregadas", operadoras);

    $scope.app = "Lista Telefonica";
    $scope.contatos = contatos.data; // contatos já resolvidos na rota
    $scope.operadoras = operadoras.data;

    var carregarContatos = function() {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
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
