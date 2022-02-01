<template>
  <div class="d-flex mt-10">
    <v-spacer></v-spacer>
    <v-card class="d-flex" width="55%" elevation="3">
      <div class="d-flex flex-column ma-10">
        <div class="d-flex">
          <v-avatar color="light-blue" class="mr-3">RV</v-avatar>
          <div class="d-flex flex-column">
            <h4>{{name}}</h4>
            <p style="font-size: 12px">{{ time }}</p>
          </div>
        </div>
        <div class="d-flex align-baseline">
          <!--static-->
          <div class="mr-2 mb-4 mt-1">
            <v-icon size="small" color="yellow">mdi-star</v-icon>
            <v-icon size="small" color="yellow">mdi-star</v-icon>
            <v-icon size="small" color="yellow">mdi-star</v-icon>
            <v-icon size="small" color="yellow">mdi-star</v-icon>
            <v-icon size="small" color="yellow">mdi-star</v-icon>
          </div>
          <!---->
          <v-icon color="grey" size="small">mdi-{{ from }}</v-icon>
        </div>
        <p>{{description}}</p>
      </div>
    </v-card>
    <v-spacer></v-spacer>
  </div>
  <div class="d-flex justify-center align-center mt-5">
    <v-btn flat>View More</v-btn>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name:'Reviews',
  props:{
    company:{
      type:Object,
      required:true
    }
  },
  setup(){
    const name=ref("Ryan V.");
    const time=ref("6 days ago");
    const from=ref("google");
    const description=ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper vestibulum egestas. Suspendisse et\n" +
        "          magna metus. Quisque non rutrum diam. Maecenas et nisl dui. Vestibulum ante ipsum primis in faucibus orci\n" +
        "          luctus et ultrices posuere cubilia curae");

    return{name,time,from,description}
  }
}
</script>
