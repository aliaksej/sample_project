/**
 * Created by sergey on 10/21/14.
 */

bmb.test.config.$module
    .config(function (bmbRouterProvider) {

        var conf = new bmb.core.router.RouterConfig();
        conf.otherwise = "/home";

        conf.login = {
            state: 'login',
            authModel: '$auth'
        };

        conf.states = {
            "home": {
                url: "/home?action",
                templateUrl: 'config/view/home.html',
                controller: bmb.test.config.homeCtrl,
                anonymous: true
            },
            history: {
                url: "/history",
                templateUrl: 'config/view/history.html',/*
                controller: function ($scope) {
                    $scope.historyListConfig = {
                        '$orderby': 'Updated desc'
                        '$top': 10
                    };
                }*/
            },
            paginatedHistory: {
                url: "/paginatedHistory",
                templateUrl: 'config/view/paginatedHistory.html'
            },
            historyManager: {
                url: "/historyManager",
                templateUrl: 'config/view/historyManager.html'
            },
            favorites: {
                url: "/favorites",
                templateUrl: 'config/view/favorites.html',
                controller: function (vlvRsiFavoriteItems, $scope) {
                    $scope.favorites = [];
                    var promise = vlvRsiFavoriteItems.getMany({
                        $orderby: 'Created desc',
                        $inlinecount: 'allpages'
                    });
                    promise.then(
                        function success (result) {
                            $scope.favorites = result;
                            window.list = result;
                        },
                        function error () {

                        }
                    );
                }
            }
        };

        bmbRouterProvider.configure(conf);
    });
