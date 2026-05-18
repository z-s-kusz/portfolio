# Running locally:
Having issues with the styles. Need to run `build:prod` before running `start` or no styles will apply.
I also think you will need to run the build prod script for any change in `tailwind.css` to take.

# TODO:
* get off of eleventy

# Adding new project to folder:
1. Make a new `.md` file in `src/projects`
2. Make sure it has "projects" in the `tags` attribute.
3. Update the `importance` attribute and those of any equal or higher that should now have a new number.
4. Update the content!
Note: To hide a project add "hidden" to the `tags` attribute.
