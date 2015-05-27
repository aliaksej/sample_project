/**
 * Created by sergey on 10/27/14.
 */


bmb.test.config.$module
    .config(['vlvConfigProvider', function (vlvConfigProvider) {
        vlvConfigProvider.configure({
            "host": bmb.vars('host'),
            "apikey": bmb.vars('apikey'),
            "cpid": bmb.vars('cpid'),
            "isCorsEnabled": bmb.vars('isCorsEnabled'),
            "logRequests": bmb.vars('logRequests'),
            "xdomainFileName": bmb.vars('xdomainFileName')
        });
}]);