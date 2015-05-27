bmb.test.config.$module.model("$auth", "idAuthModel");

/**
 * Created by sergey on 10/21/14.
 */

bmb.test.config.$module
    .config(function (bmbRouterProvider) {

        var conf = new bmb.core.router.RouterConfig();

        conf.states = {
            "forgotPassword": {
                url: "/forgotPassword",
                templateUrl: 'auth/view/forgotPassword.html',
                controller: bmb.test.auth.$module.authCtrl,
                anonymous: true
            }
        };

        bmbRouterProvider.configure(conf);
    });
