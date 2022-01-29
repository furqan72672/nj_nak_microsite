<template>
  <div style="margin-right: 20%; margin-left: 20%;" class="d-flex flex-column mt-10">
    <h1>{{ name }}</h1>
    <span style="font-size: 15px; color: grey" >{{ city }},{{country}}</span>
    <div class="d-flex  align-center">
      <h3 class="mr-3">{{ rating }}</h3>
      <!--static-->
      <div class="mr-4">
        <v-icon color="yellow" size="small">mdi-star</v-icon>
        <v-icon color="yellow" size="small">mdi-star</v-icon>
        <v-icon color="yellow" size="small">mdi-star</v-icon>
        <v-icon color="yellow" size="small">mdi-star-half-full</v-icon>
        <v-icon color="yellow" size="small">mdi-star-outline</v-icon>
      </div>
      <!---->
      <v-divider vertical thickness="1.5" class="mr-4"></v-divider>
      <div class="d-flex mr-4 align-baseline">
        <v-icon size="x-small" color="red">mdi-google</v-icon>
        <p>{{ ratingGoogle }}</p>
      </div>
      <div class="d-flex mr-4 align-baseline">
        <v-icon size="x-small" color="blue">mdi-facebook</v-icon>
        <p>{{ ratingFacebook }}</p>
      </div>
      <div class="d-flex align-baseline">
        <v-icon size="x-small" color="brown">mdi-instagram</v-icon>
        <p>{{ratingInsta}}</p>
      </div>
      <v-spacer></v-spacer>
      <v-btn rounded="pill" flat color="light-blue" text-color="white" @click="dialog=true">Get Quote</v-btn>
    </div>
  </div>
  <Popup v-model="dialog" @closeDialog="dialog=false">
    <div class="d-flex flex-column ma-4">
      <v-card-title class="align-self-center">Get Quote</v-card-title>
      <div>
        <v-form class="d-flex flex-column align-start" type="submit">
          <v-text-field class="align-with-label" density="compact" label="Name"></v-text-field>
          <v-text-field class="align-with-label" density="compact" label="Email"></v-text-field>
          <v-text-field class="align-with-label" density="compact" label="Phone"></v-text-field>
          <v-textarea class="align-with-label" density="compact" label="Tell us your job requirements"></v-textarea>
          <v-text-field class="align-with-label" density="compact" label="When do you need the work done?"></v-text-field>
          <label>Which region do you fall in?</label>
          <select v-model="selection" class="align-with-label mb-4 mt-1 pa-2" style="background: #f5f5f5; border: 1px solid black">
            <option disabled value="">Please select an option...</option>
            <option>Southtown</option>
            <option>Northtown</option>
            <option>Easttown</option>
            <option>Westtown</option>
          </select>
          <v-checkbox v-model="urgent" :model-value="false" label="Is this an urgent matter?" density="compact" class="mt-4"></v-checkbox>
          <v-checkbox v-model="alright" :model-value="false" label="Are you alright?" density="compact"></v-checkbox>
          <p class="text-grey">Our representative will talk to you soon!</p>
          <v-btn class="align-self-center my-6" rounded="pill" color="light-blue" flat text-color="white" @click.prevent="">Get Quote</v-btn>
        </v-form>
      </div>
    </div>
  </Popup>
</template>

<script>
import {ref} from "vue";
import Popup from "@/components/Popup";

export default {
  name:'Header',
  components:{Popup},
  setup(){
    const name=ref("NAK");
    const city=ref("Multan");
    const country=ref("Pakistan");
    const rating=ref("4.7");
    const ratingGoogle=ref("4.7");
    const ratingFacebook=ref("4.6");
    const ratingInsta=ref("4.8");
    const dialog=ref(false);
    const urgent=ref(false);
    const alright=ref(false);
    const selection=ref("")


    return{alright,urgent,city,ratingGoogle,name,ratingInsta,ratingFacebook,rating,country,dialog,selection}
  }
}
</script>


<style>
.align-with-label{
  width: 100% !important;
}

</style>
