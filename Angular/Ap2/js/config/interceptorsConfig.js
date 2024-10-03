angular.module("listaTelefonica").config(function ($httpProvider) {
    $httpProvider.interceptors.push("timestampIntercetor");
    $httpProvider.interceptors.push("errorInterceptor");
});