cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.procit.echo/www/echo.js",
        "id": "com.procit.echo.Echo",
        "clobbers": [
            "window.echo"
        ]
    },
    {
        "file": "plugins/com.procit.service/www/service.js",
        "id": "com.procit.service.Service",
        "clobbers": [
            "window.service"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.geolocation": "0.3.12",
    "com.procit.echo": "0.0.1",
    "com.procit.service": "0.0.1",
    "org.apache.cordova.inappbrowser": "0.6.0"
}
// BOTTOM OF METADATA
});