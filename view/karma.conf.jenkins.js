module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            {pattern: "ext/knockout/ts/obWebclient/**/validation/**/*.ts"},
            {pattern: "test/knockout/ts/**/*.spec.ts"}
        ],
        preprocessors: {
            "ext/knockout/**/*.ts": ["karma-typescript"],
            "test/knockout/**/*.spec.ts": ["karma-typescript"]
        },
        karmaTypescriptConfig: {
            "compilerOptions": {
                "module": "commonjs",
                "allowJs": true
            }
        },
        reporters: ["progress", "junit", "coverage"],

        junitReporter: {
            outputDir: '', //results will be saved as $outputDir/$browserName.xml
            outputFile: 'webclient_js_test_results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: 'WebclientTypescript', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, //add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {} // key value pair of properties to add to the section of the report
        },

        singleRun: true,
        concurrency: Infinity,

        browsers: ["PhantomJS"]
    });
};