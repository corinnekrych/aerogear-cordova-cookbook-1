cordova.define("org.jboss.aerogear.cordova.oauth2.oauth2", function(require, exports, module) { /*global cordova*/

var exec = require("cordova/exec");

var OAuth2 = function(){};

OAuth2.prototype.getGoogleDriveFiles = function (successCallback) {
    cordova.exec(successCallback, null, "OAuth2Plugin", "getGoogleDriveFiles", []);
};

module.exports = new OAuth2();

});
