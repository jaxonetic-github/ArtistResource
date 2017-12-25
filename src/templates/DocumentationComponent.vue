<template>
  <div>
    <!-- Render the documentation for MyButton -->
    <prop-doc :component="CityDirectory"></prop-doc>
  </div>
</template>

<script>
import propDoc from 'propdoc';
import CityDirectory from './city-directory.vue';

export default {
  components: {
    propDoc
  },

  data() {
    return {
      CityDirectory
    }
  }
}
</script>