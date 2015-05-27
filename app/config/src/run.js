bmb.test.config.$module.model("$history", "rsHistoryModel");

bmb.test.config.$module.model("historyEndlessListViewModel", "rsHistoryEndlessListViewModel", function ($history) {
    return {
        "historyModel": $history
    };
});

bmb.test.config.$module.model("dateIntervals", "rsDateIntervals");

bmb.test.config.$module.model('historyViewEndlessListViewModel', 'rsHistoryViewEndlessListViewModel', function ($history, dateIntervals) {
    return {
        historyModel: $history,
        dateIntervals: dateIntervals
    };
});

bmb.test.config.$module.model("paginatedHistoryListModel", "PaginatedHistoryListViewModel", function ($history, dateIntervals) {
    return {
        historyModel: $history,
        dateIntervals: dateIntervals
    };
});

bmb.test.config.$module
    .run([
        "bmbStaticDataProvider", "idUserPasswordAuthProvider", "$rootScope", "historyEndlessListViewModel", "historyViewEndlessListViewModel",
        function (bmbStaticDataProvider, idUserPasswordAuthProvider, $rootScope, historyEndlessListViewModel, historyViewEndlessListViewModel) {


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

            historyEndlessListViewModel.configure({
                params: {
                    //$top: 5
                }
            });

            historyViewEndlessListViewModel.configure({
                dateInterval: ['day', 0],
                order: {
                    field: 'Updated',
                    direction: 'desc'
                }
            });

    }]);

bmb.test.config.$module.model("favoritesModel", "rsFavoritesModel");
