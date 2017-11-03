module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            {pattern: "ext/knockout/ts/obnieuw/shared/validation/**/*.ts"},
            {pattern: "ext/knockout/ts/obnieuw/aangifte/validation/**/*.ts"},
            {pattern: "ext/test/*.ts"},
            {pattern: "ext/knockout/ts/src/**/*.ts"}
        ],
        preprocessors: {
            "ext/knockout/**/*.ts": ["karma-typescript"],
            "ext/test/**/*.ts": ["karma-typescript"]
        },
        karmaTypescriptConfig: {
            "compilerOptions": {
                "module": "commonjs",
                "allowJs": true
            }
        },
        reporters: ["progress", 'junit', 'coverage'],

        // the default configuration
        junitReporter: {
            outputDir: '', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'test_jasmine_js.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {} // key value pair of properties to add to the section of the report
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        browsers: ["PhantomJS"]
    });
};