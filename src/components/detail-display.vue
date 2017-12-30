<style>
/**  center the table **/
table {margin: auto}
.card__title{text-transform: capitalize;}
th,td{margin:5px; padding:10px;}
h6{color:white;margin-bottom: 0rem;}

</style>

<template>
<v-app id="display-table" class="elevation-4">

<v-card class="blue-grey darken-3 ">
  <v-card-title>
    {{title}}
    <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        
      ></v-text-field>
  </v-card-title>
  <v-data-table :headers="headerz" :items="itemz" >
   <!--   <template slot="headers" scope="props">
    <h6 class="text-xs-left">
      {{ props.item.text }}
    </h6>
  </template>
  -->

    <template slot="itemz" slot-scope="props">
      <td v-for=" value in Object.keys(props.item)" class="text-xs-left">{{props.item[value] }}</td>
    </template>
    </v-data-table>
</v-card>
</v-app>
</template>

<script>
/**
 * 
 * @author Alonzo Jackson
 * @description  Displays detailed resources for artists in a particulary city in tabular form
 * @module components/detail-display
 * @example  <cdetail-display   :site-data-received="{}" />
 * @name  Detail-Display
 * @param headerz  The Header Text for the Table header row
 * 
 */
export default{
name:'detail-display', 
 props :["itemz","headerz", "title" ],
 
  
}
</script>