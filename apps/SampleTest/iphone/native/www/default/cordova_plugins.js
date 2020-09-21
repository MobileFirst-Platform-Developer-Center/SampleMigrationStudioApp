
/* JavaScript content from cordova_plugins.js in JS Resources */
/*
* Licensed Materials - Property of IBM
* 5725-I43 (C) Copyright IBM Corp. 2006, 2020. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/
cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
      },
      {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
          "navigator.notification"
        ]
      },
      {
        "id": "cordova-plugin-globalization.GlobalizationError",
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
          "window.GlobalizationError"
        ]
      },
      {
        "id": "cordova-plugin-globalization.globalization",
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
          "navigator.globalization"
        ]
      },
      {
        "id": "cordova-plugin-mfp.mfp",
        "file": "plugins/cordova-plugin-mfp/bootstrap.js",
        "pluginId": "cordova-plugin-mfp",
        "runs": true
      },
      {
         "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
         "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
         "pluginId": "cordova-plugin-wkwebview-engine",
         "clobbers": [
            "cordova.exec"
         ]
      },
      {
        "id": "cordova-plugin-wkwebview-engine.ios-wkwebview",
        "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview.js",
        "pluginId": "cordova-plugin-wkwebview-engine",
        "clobbers": [
          "window.WkWebView"
        ]
      }
    ];
    module.exports.metadata = {
      "cordova-plugin-device": "2.0.3",
      "cordova-plugin-dialogs": "2.0.2",
      "cordova-plugin-globalization": "1.11.0",
      "cordova-plugin-mfp": "8.0.2020022009",
      "cordova-plugin-wkwebview-engine": "1.2.1"
    };
  });
