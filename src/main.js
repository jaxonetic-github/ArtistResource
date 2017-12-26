

// Import Vue
import Vue from 'vue'

//import components
import Vuetify from 'vuetify';
//import VueRouter from 'vue-router';

Vue.use(Vuetify);

// Import F7
import Framework7 from 'framework7'


// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
//import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
//import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
//OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'


// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js' 

// Import App Component
import CityDirectory from './templates/city-directory.vue';
import {siteTestData, testURL}  from './util.js';

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

/* 
 * Initial Vue App Entry Point:  This Vue instance loads the app/city data   
 */
    new Vue({
  el    : '#app',
  data  : function(){  return {siteData:'', debug:true} },
created : function(){  this.siteData = siteTestData(); },

      // Init Framework7 by passing parameters here
framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
         material: true,
        routes: Routes,
      },
      // Register App Component
      components: {   CityDirectory }
    })




