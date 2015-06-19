bmb.test.config.$module.model("$history", "rsHistoryModel");

bmb.test.config.$module.model("historyEndlessListViewModel", "rsHistoryListViewModel", function ($history) {
    return {
        "historyModel": $history,
        mode: 'endless'
    };
});

bmb.test.config.$module.model("paginatedHistoryListModel", "rsHistoryListViewModel", function ($history, dateIntervals) {
    return {
        historyModel: $history,
        dateIntervals: dateIntervals,
        mode: 'paging'
    };
});

bmb.test.config.$module.model("dateIntervals", "rsDateIntervals");

bmb.test.config.$module.model('historyViewEndlessListViewModel', 'rsHistoryViewListModel', function ($history, dateIntervals) {
    return {
        historyModel: $history,
        dateIntervals: dateIntervals,
        mode: 'endless'
    };
});

bmb.test.config.$module.value('historyItemClickHandler', function (item) {
    alert(item.type);
});

bmb.test.config.$module
    .run([
        "bmbStaticDataProvider", "idUserPasswordAuthProvider", "$rootScope", "historyEndlessListViewModel", "historyViewEndlessListViewModel", "paginatedHistoryListModel",
        function (bmbStaticDataProvider, idUserPasswordAuthProvider, $rootScope, historyEndlessListViewModel, historyViewEndlessListViewModel, paginatedHistoryListModel) {


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

            paginatedHistoryListModel.configure({
                //maxLength: 53
            });
    }]);

bmb.test.config.$module.model("favoritesModel", "rsFavoritesModel");
