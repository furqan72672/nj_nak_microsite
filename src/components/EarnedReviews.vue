<template>
  <div class="d-flex mt-10">
    <v-spacer></v-spacer>
    <v-card class="mt-10" width="55%" elevation="3">
      <div class="mx-10 my-10">
        <div class="mb-4">
          <v-rating
              v-model="average_rating"
              color="yellow"
              density="compact"
              half-increments
              readonly
          ></v-rating>
        </div>
        <p style="font-size: 20px;"><strong>{{ name }}</strong> has earned an overall rating of <strong>{{ average_rating }}</strong> from <strong>{{ total_reviews }}</strong> customers.</p>
      </div>
    </v-card>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name:'EarnedReviews',
  props:{
    company:{
      type:Object,
      required:true
    },
    rating:{
      type:Object,
      required:true
    }
  },
  setup(props){
    const {name}=props.company
    const{total_reviews}=props.rating
    const average_rating=ref(props.rating.average_rating?props.rating.average_rating.toFixed(1):null)

    return{name,total_reviews,average_rating}
  }
}
</script>
