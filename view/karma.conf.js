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
        reporters: ["progress", "html", "coverage"],

        htmlReporter: {
            outputDir: 'karma_html', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: false, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
            reportName: 'report-summary-filename' // report summary filename; browser info by default
        },

        browsers: ["PhantomJS"]
    });
};