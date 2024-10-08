angular.module("listaTelefonica").factory("loadingInterceptor", function ($q, $rootScope, $timeout) {
   return {
        request: function (config) {
            $rootScope.loading = true;
            return config;
        }, 
        requestError: function (rejection) {
            $rootScope.loading = false;
            return $q.rejection(rejection);
        },
        response: function (response) {
            $timeout(function () {
                $rootScope.loading = false;

            }, 1000);
            return response;
        }, 
        responseError: function (rejection) {
            return $q.rejection(rejection);
        }
   };
});