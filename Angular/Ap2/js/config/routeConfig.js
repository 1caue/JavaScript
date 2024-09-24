angular.module("listaTelefonica").config(function($routeProvider) {
    $routeProvider
    .when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl", 
        resolve: {
                contatosRes: function (contatosAPI) {
                    console.log(contatosAPI)
                    return contatosAPI.getContatos();
                },
                operadorasRes: function (operadorasAPI) {
                    console.log(operadorasAPI)
                    return operadorasAPI.getOperadoras();
                }
            }
    })
   $routeProvider
    .when("/novoContato", {
        templateUrl: "view/novoContato.html",
        controller: "novoContatoCtrl",
    });
    $routeProvider
    .otherwise({
        redirectTo: "/contatos"
    });
});
