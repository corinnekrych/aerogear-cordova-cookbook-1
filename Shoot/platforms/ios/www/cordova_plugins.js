cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/ios/CameraPopoverHandle.js",
        "id": "org.apache.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/org.jboss.aerogear.cordova.oauth2/www/oauth2.js",
        "id": "org.jboss.aerogear.cordova.oauth2.oauth2",
        "clobbers": [
            "oauth2"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.camera": "0.3.0",
    "org.jboss.aerogear.cordova.oauth2": "0.0.1"
}
// BOTTOM OF METADATA
});