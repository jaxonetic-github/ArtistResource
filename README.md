# Framework7 Vue + Webpack + Cordova App Template

A full-featured Framework7 + Vue + Webpack setup with hot-reload & css extraction. Based on [Vue Webpack Boilerplate](https://github.com/vuejs-templates/webpack)

## Build Setup

``` bash
# install dependencies into node_modules
npm install

# add the ne
cordova platform add browser
cordova platform add android

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# Documentation
propdoc gives the ability to write your documentation as properties on components.

https://alligator.io/vuejs/propdoc-document-components/

## Project Structure

* `src/assets` - folder with static assets (images)
* `src/components` - folder with custom `.vue` components
* `src/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/pages` - app `.vue` pages
* `src/main.js` - main app file where you include/import all required libs and init app
* `src/routes.js` - app routes
* `src/app.vue` - main app structure/component

