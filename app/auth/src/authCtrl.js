bmb.test.auth.$module.authCtrl = function ($scope, $auth) {

    $scope.requestPassword1 = function () {
        $scope.error = null;
        $scope.passwordRequestSuccess = null;

        if (!$scope.username) {
            $scope.error = 'Please enter username';
            return;
        }

        $auth.getForgottenPassword($scope.username).then(function (response) {
            $scope.passwordRequestSuccess = true;
        }, function error (error) {
            $scope.error = error.message;
        });
    };
};