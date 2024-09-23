angular.module("listaTelefonica").config(function($routeProvider) {
    $routeProvider
    .when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl", 
        resolve: {
            contatos: function (contatosAPI) {
                return contatosAPI.getContatos().then(function (response) {
                    console.log("Contatos resolvidos", response.data);
                    return response;
                });
            },
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras().then(function (response) {
                    console.log("Operadoras resolvidas", response.data);
                    return response;
            }           
        )}}
    });
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
