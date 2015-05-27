
bmb.test.config.$module.directive("idLogout", function () {
        return {
            "restrict": "EA",
            "controller": function ($scope, $attrs, $controller) {
                $scope.logout = function () {
                    var authModel = $controller($attrs.authModel);
                    authModel.logout().then(function () {
                        alert('You have been logged out');
                    });
                }
            }
        }
    });

