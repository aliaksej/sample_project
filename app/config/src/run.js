bmb.test.config.$module.model("$history", "rsHistoryModel");

bmb.test.config.$module.model("dateIntervals", "rsDateIntervals");

bmb.test.config.$module.model('historyViewModel', 'rsHistoryViewModel', function ($history, dateIntervals) {
    return {
        historyModel: $history,
        dateIntervals: dateIntervals,
        mode: 'paging'
    };
});

bmb.test.config.$module.factory('historyItemClickHandler', function ($history) {
    return function (item) {
        alert($history.getItemType(item));
    };
});

bmb.test.config.$module.factory('allHistoryClickHandler', function ($state) {
    return function (item) {
        $state.go('historyManager');
    };
});

bmb.test.config.$module
    .run([
        "bmbStaticDataProvider", "idUserPasswordAuthProvider", "$rootScope", "historyViewModel",
        function (bmbStaticDataProvider, idUserPasswordAuthProvider, $rootScope, historyViewModel) {


            idUserPasswordAuthProvider.configure({
                loginState: "home",
                logoutState: "home",
                logoutStateParams: {action: 'loggedOut'}
            });

            bmbStaticDataProvider.init({
                "cfId": "",
                "clusteredSearch": {
                    "available": true,
                    "clusterAggregationFilter": "wkcluster3",
                    "correlatedDocumentTypeFilter": "doctypes3-ats-filter",
                    "resultsPerCluster": "3"
                }
            });

            idUserPasswordAuthProvider.authenticate({
                userId: "exadel01@wk.com",
                password: "password",
                autoLogin: true
            }).then(function () {
                bmb.log.info("Auth");
                $rootScope.$broadcast('authorized');
            });

            historyViewModel.configure({
                order: {
                    field: 'Updated',
                    direction: 'desc'
                }
            });
        }]);

bmb.test.config.$module.model("favoritesModel", "rsFavoritesModel");
