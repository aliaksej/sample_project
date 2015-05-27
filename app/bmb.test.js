/**
 * Created by sergey on 10/21/14.
 */

/** @namespace */
namespace("bmb.test");
/**
 * @bmb.module bmb.test
 * @bmb.module.platform node modern androidshell iosshell desktopshell
 * @type {bmb.AngularModule}
 */

bmb.ngProduct("bmb.test", [
    "bmb.angular",
    {
        "name": "bower:angular-bootstrap",
        "ngModules": ["ui.bootstrap"]
    },
    "velvet",

    "bmb.core.router",
    "bmb.core.base",
    "bmb.core.properties",
    "bmb.core.models",
    "bmb.core.location",
    "bmb.core.list",
    "bmb.identity.all",
    "bmb.research.all",

    "bmb.test.config",
    "bmb.test.auth"
]);