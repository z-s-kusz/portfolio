module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/favicon.png");
    eleventyConfig.addPassthroughCopy("src/github-mark.svg");

    eleventyConfig.addCollection("sortedProjects", (collectionApi) => {
        const projects = collectionApi.getFilteredByTag("projects");
        return projects.sort((a, b) => {
            return b.data.importance - a.data.importance;
        });
    });

    return {
        dir: { input: "src", output: "_site" },
    };
};
