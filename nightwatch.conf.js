module.exports = {
    "src_folders": "tests",
    "output_folder": "reports",
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "page_objects_path": "page_objects",
    "globals_path": "",
    "selenium": {
        "start_process": true,
        "server_path": require('selenium-server').path,
        "log_path": "./reports",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": require('chromedriver').path,
            "webdriver.gecko.driver": require('geckodriver').path,
        }
    },

    "test_settings": {
        "firefox":{
            "desiredCapabilities": {
                "browserName": "firefox",
                "marionette": true,
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        },

        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": {
                    "w3c": false
                },
            }
        },

        "safari":{
            "desiredCapabilities":{
                "browserName": "safari",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
            }
        }
    }
};