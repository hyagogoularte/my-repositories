# Install

1. `npm -g install grunt-cli karma`
2. `gem install sass`
3. `npm install`

# Run

`grunt serve`

Open a browser and navigate to `localhost:9001`

# Coverage

To see the coverage report navigate to `coverage` folder created by grunt serve, build or compile, and locate index.html file.

# Build process

### Staging

`grunt build` for not minified version to debug in the browser

### Production

`grunt compile` for creating a `bin` folder with one minified JavaScript file for production

For compiling the langauge files you need to add them to list in Gruntfile config under jsonmin->locale->files
