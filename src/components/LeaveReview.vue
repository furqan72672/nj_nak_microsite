<template>
  <div class="d-flex flex-column justify-center align-center mt-10">
    <h2 style="font-weight: bold">Leave us a review</h2>
    <div class="mb-4" @mouseover="changeColor" @mouseleave="changeColorBack">

      <!--i will get rating.....print stars with rating.....than minus the remaining rating and loop empty stars-->
      <v-icon @click="openPopup" v-for="i in 5" size="7vh" :color="color">mdi-star</v-icon>
    </div>
  </div>
  <Popup v-model="popup" @closeDialog="popup=false">
    <div class="ma-4 d-flex flex-column align-center">
      <v-card-title>Let people know what you think about {{name}}</v-card-title>
      <p>Leave a review on following platforms</p>
      <v-card width="90%" class="mt-4">
        <v-list-item class="align-baseline">
          <v-list-item-avatar><v-icon color="blue">mdi-facebook</v-icon></v-list-item-avatar>
          <v-list-item-title>Facebook</v-list-item-title>
        </v-list-item>
      </v-card>
      <v-card width="90%" class="mt-4 ">
        <v-list-item class="align-baseline">
          <v-list-item-avatar><v-icon color="red">mdi-google</v-icon></v-list-item-avatar>
          <v-list-item-title>Google</v-list-item-title>
          <v-spacer></v-spacer>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item>
      </v-card>
    </div>
  </Popup>
</template>

<script>
import {ref} from "vue";
import Popup from "./Popup";

export default {
  name:'LeaveReview',
  components: {Popup},
  setup(){
    const color=ref("grey")
    const popup=ref(true)
    const name=ref("NAK")


    function openPopup(){
      popup.value=true
    }
    function changeColor(){
      color.value="yellow";
    }
    function changeColorBack(){
      color.value="grey";
    }
    return {color,changeColor,changeColorBack,openPopup,popup,name}
  }
}
</script>
