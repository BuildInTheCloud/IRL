# Inital setup
1. download this project as a zip file and unzip in your project folder.
2. `npm install -g cordova`
3. `npm install -g ionic@beta`
4. `typings install`, requires `npm install -g typings`
5. `npm install`
6. `ionic plugins install`. install cordova plugins listed in the `config.xml`.
7. `ionic plugin add https://github.com/VersoSolutions/CordovaClipboard.git --save`,
this is a plugin for this example. Use this style to add plugins to your project.
Not all plugins support all platforms. Make sure the plugin support you target platforms.

# package.json
1. change "name": "your app name"
2. change "description": "your app description"

# config.xml
reference: http://cordova.apache.org/docs/en/latest/config_ref/index.html

This is the most import file for your deployment. Spend time to replace the images with your app images. The build puls from this file.

1. Update all images in resources sub folder with images for your app.
2. search for the work YOUR and replace with your app information.

NOTE: Complete config changes before adding platforms. Impacks how platforms are setup.

# Add platforms
1. `ionic platform add android`
2. `ionic platform add windows`
3. `ionic platform add ios`

