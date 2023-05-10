module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/favicon.png");
    eleventyConfig.addPassthroughCopy("src/github-mark.svg");

    return {
        dir: { input: "src", output: "_site" },
    };
};
