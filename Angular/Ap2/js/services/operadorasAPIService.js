angular.module("listaTelefonica").service("operadorasAPI", function () {
    this.getOperadoras = function () {
        return $http.get("http://localhost:3000/operadoras");
    };
});