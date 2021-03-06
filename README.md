# Framework7 Vue + Webpack + Cordova App Template

A full-featured Framework7 + Vue + Webpack setup with hot-reload & css extraction.  This is just an extremely simplified prototype of a Vue Application.  The Project Structure is of a cordova app and some details of this structure is provided below.  The actual Vue components can be found in `src/components`

## Build Setup for Cordova application
npm install -g cordova

cordova create Directory_Name -- Spec

Add the Google Api key to index.html


# install dependencies into node_modules
npm install

# add the appropriate platform
cordova platform add browser

cordova platform add android

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# Documentation
I started with [PropDoc](https://alligator.io/vuejs/propdoc-document-components/) and changed to [jsDoc](http://usejsdoc.org/) which is more universal and less Vue.js specific.  I had to add [jsdoc-vue](https://github.com/QingWei-Li/jsdoc-vue) to allow JsDoc to be able to parse Vue single file components.

All the jsdoc arguments are in jsDocConfig json file.

Documentation is created by running...
>>node_modules/.bin/jsdoc  -c  config/jsDocConfig.json

Successful completion of this command will produce html documentation in docs/


## Project Structure

* `src/components` - folder with custom `.vue` components
* `src/components/city-directory.vue` - main app structure/component
* `src/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/pages` - app `.vue` pages
* `src/main.js` - main app file where you include/import all required libs and init app
* `src/routes.js` - app routes
* `src/util.js` - app constants and methods 
* `config/jsDocConfig.json` - The configuration file used by jsDoc
* `docs/`          - HTML Documentation for the web components generated by jsdoc 
