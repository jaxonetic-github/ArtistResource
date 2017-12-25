<style>
/**  change the tabbar color from default blue to black **/
/*.row .col  { overflow:hidden; padding-right:0;    padding-left: 0.5rem;}
.secondary{background-color:transparent !important;  min-height:100%; color:black;}
*/</style>


<template>
<section>
<article>
<v-card class="grid">
  
  <v-container fluid class="px-3">
 <v-layout row wrap>
  <v-flex xs4 v-for="article in articles" :key="article.header">
        <v-card dark color="primary" class="secondary">
        <v-card-media
          :src="article.image" alt="lorem"
          height="300px"
        >
        </v-card-media>
             <v-spacer></v-spacer>
           <v-subheader>{{article.header}}</v-subheader>

          <v-card-text class="px-0">{{article.snippet}}</v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
  
  <v-footer class="mt-5 transparent" />
</v-card>
</article>
</section>
</template>

<script>


export default{
  name:"summary-display",
  description: 'Displays brief announcements in an organized responsive row',
    token: `<list-display  :articles="[]" />`,


  props :{
    articles:{type:Array,
              note:'An array of promo data for a particular announcement' 

    }
  }
  
}
</script>