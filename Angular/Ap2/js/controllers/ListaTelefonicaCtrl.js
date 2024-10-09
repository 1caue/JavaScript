angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {

    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function() {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
            calcularImposto($scope.contatos); // Os impostos serão calculados após o carregamento
            generateSerial($scope.contatos); // Gera os seriais para os contatos carregados
        }).catch(function(error) {
            console.error("Erro ao carregar contatos: ", error);
        });
    };

    var carregarOperadoras = function() {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        }).catch(function(error) {
            console.error("Erro ao carregar operadoras: ", error);
        });
    };

    var calcularImposto = function (contatos) {
        contatos.forEach(function (item) {
            if (item.operadora && item.operadora.preco) {
                item.operadora.precoComImposto = $scope.calcularImposto(item.operadora.preco);
            }
        });
    };

    var generateSerial = function(contatos) {
        contatos.forEach(function(item) {
            item.serial = serialGenerator.generate();
        });
    };

    $scope.adicionarContato = function(contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        
        contatosAPI.saveContato(contato).then(function(response) {
            console.log("Contato salvo com sucesso:", response.data);
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos(); // Recarregar contatos após adicionar
        }).catch(function(error) {
            console.error("Erro ao salvar contato: ", error);
        });
    };

    $scope.apagarContatos = function(contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            return !contato.selecionado;
        });
    };

    $scope.isContatoSelecionado = function(contatos) {
        return contatos.some(function(contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    var counter = 0;
    $scope.calcularImposto = function (preco) {
        console.log(counter++);
        var imposto = 1.2;
        return preco * imposto;
    };

    carregarContatos();
    carregarOperadoras();
});
