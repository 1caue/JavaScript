angular.module("listaTelefonica").directive("uiDate", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            element.bind("keyup", function () {
                console.log(ctrl.$viewValue);

            });
        }
    };
});