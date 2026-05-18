module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/favicon.png");
    eleventyConfig.addPassthroughCopy("src/github-mark.svg");

    eleventyConfig.addCollection("sortedProjects", (collectionApi) => {
        const allProjects = collectionApi.getFilteredByTag("projects");
        const activeProjects = allProjects.filter((project) => {
            return !project.data.tags.includes('hidden');
        });

        return activeProjects.sort((a, b) => {
            return b.data.importance - a.data.importance;
        });
    });

    return {
        dir: { input: "src", output: "_site" },
    };
};
