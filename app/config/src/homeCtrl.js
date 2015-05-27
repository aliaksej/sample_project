bmb.test.config.$module.run(function ($auth){
    $auth.setProvider("idUserPasswordAuthProvider");
});

bmb.test.config.homeCtrl = function($scope, $auth, $state, $location){
    $scope.message = 'Hello world';

    $scope.username = 'exadel01@wk.com';
    $scope.password = 'welcome';

    $scope.$location = $location;

    $scope.authenticated = false;

    $scope.login = function () {
        $auth.authenticate($scope.username, $scope.password, true).then(function (result) {
            $scope.authenticated = true;
        });
    };

    $scope.logout = function () {
        if (!confirm('Do you really want to logout?')) return false;
        $auth.logout().then(function () {
            $scope.authenticated = false;
        });
    };
};