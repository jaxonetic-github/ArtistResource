<template>
  <!-- App -->
  <v-app>

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>


    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view"  navbar-through :dynamic-navbar="true"  main>
  
        <!-- Pages -->
        <f7-pages>
          <f7-page>

            <!-- Page Content -->
            <f7-block >
              <p>{{siteData.description}}</p>
              <v-spacer></v-spacer>

              <v-toolbar class="white">
    <v-toolbar-title class="grey--text text--darken-4">Latest</v-toolbar-title>
                   <v-spacer></v-spacer>
          <v-menu id="inner-nav"  bottom left>
            <v-btn icon slot="activator" light>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="item in navigationSections" :key="item.title" @click="navClicked(item.value)">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

  </v-toolbar>

              <summary-display :articles="siteDataReceived.tableData[navigationIndex].latest"/>
              <detail-display :itemz="siteData.tableData[navigationIndex].items" :title="siteData.tableData[navigationIndex].section" :headerz="siteData.tableData[navigationIndex].headerz" />
            </f7-block>
           
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

  </v-app>
</template>


<script>



import DetailDisplay from './detail-display.vue';
import SummaryDisplay from './summary-display.vue';

/**
 * A simple checkbox component.
 * @name  City-Directory
 * @author Alonzo Jackson
 * @description  Displays resources for artists in a particulary city
 * @module City-directory
 * @example  <city-directory   :site-data-received="{}" />
 * @param siteDataReceived City information (i.e. events, jobs) in json object form
 * @requires  Detail-Display 
 * @requires Summary-Display 
 */
export default {
   name:"city-directory",
   props :{
       siteDataReceived :{
        type:Object
               }
     },
  
   data  : function(){return {siteData:this.siteDataReceived, 
                               navigationIndex:0,
                              navigationSections: []    };},
   created: function(){
   //loop through and create sectionname/navigationIndex Pairing for menu options
    for (let i=0; i< this.siteData.tableData.length; i++){
      this.navigationSections.push({title:this.siteData.tableData[i].section, value:i});
    }
   
    },

    methods:{
      /**
       *  @function  navClicked updates the components navigationIndex which updates the data displayed
       * <list-display/> and <display-table/>
       */
      navClicked:function(newNavIndex){ this.navigationIndex=newNavIndex;}
    }, 
    components: {   'detail-display':DetailDisplay, 'summary-display':SummaryDisplay }



   }

</script>

<style>
v-app{min-height: 1200px}
#update-date{font-size: 10px}
#inner-nav{z-index: 9999}  /* necessary to capture mouse click when material is on*/
</style>
