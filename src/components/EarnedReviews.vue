<template>
  <div class="d-flex mt-10">
    <v-spacer></v-spacer>
    <v-card class="mt-10" width="55%" elevation="3">
      <div class="mx-10 my-10">
        <!--static-->
        <div class="mb-4">
          <v-icon color="yellow" >mdi-star</v-icon>
          <v-icon color="yellow" >mdi-star</v-icon>
          <v-icon color="yellow" >mdi-star</v-icon>
          <v-icon color="yellow" >mdi-star-half-full</v-icon>
          <v-icon color="yellow" >mdi-star-outline</v-icon>
        </div>
        <!---->
        <p style="font-size: 20px;">{{ name }} has earned an overall rating of <strong>{{ rating }}</strong> from <strong>{{ customers }}</strong> customers.</p>
      </div>
    </v-card>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name:'EarnedReviews',
  setup(){
    const name=ref("NAK");
    const rating=ref("4.7");
    const customers=ref("54");

    return{name,rating,customers}
  }
}
</script>
