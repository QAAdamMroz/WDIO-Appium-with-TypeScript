import { join } from 'path';
import config from '../config/wdio.shared.local.conf';

// ============
// Specs
// ============
config.specs = [
    '../tests/specs/*.ts',
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "emulator-5554",
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:appWaitActivity': '*',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/app-test.apk'),
        // @ts-ignore
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config= config;