<template>
  <div class="d-flex flex-column justify-center align-center mt-10">
    <h2 style="font-weight: bold">Leave us a review</h2>
    <div class="mb-4" @mouseover="changeColor" @mouseleave="changeColorBack">

      <!--i will get rating.....print stars with rating.....than minus the remaining rating and loop empty stars-->
      <v-icon @click="openPopup" v-for="i in 5" size="7vh" :color="color">mdi-star</v-icon>
    </div>
  </div>
  <Popup v-model="localPopup" @closeDialog="localPopup=false" width="30vw">
    <div class="mx-4 mb-8 d-flex flex-column align-center">
      <v-card-title>Let people know what you think about {{name}}</v-card-title>
      <p>Leave a review on following platforms</p>
      <v-card :elevation="elevation1" width="90%" height="8vh" class="mt-4 px-4 d-flex align-center" @mouseover="cardHover1" @mouseleave="hoverLeave1">
        <v-icon color="blue">mdi-facebook</v-icon>
        <v-spacer></v-spacer>
        <v-list-item-title>Facebook</v-list-item-title>
        <v-spacer></v-spacer>
        <v-icon :color="hover1?'blue':'black'">mdi-chevron-right</v-icon>
      </v-card>
      <v-card :elevation="elevation2" width="90%" height="8vh" class="mt-4 px-4 d-flex align-center" @mouseover="cardHover2" @mouseleave="hoverLeave2">
        <v-icon color="red" >mdi-google</v-icon>
        <v-spacer></v-spacer>
        <v-list-item-title>Google</v-list-item-title>
        <v-spacer></v-spacer>
        <v-icon :color="hover2?'blue':'black'">mdi-chevron-right</v-icon>
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
  props:{
    popup:{
      type:Boolean,
    },
    id:{
      type:String,
    }
  },
  setup(props){
    const color=ref("grey")
    const name=ref("NAK")
    const hover1=ref(false)
    const hover2=ref(false)
    const elevation1=ref(1)
    const elevation2=ref(1)
    const localPopup=ref(props.popup)
    if(props.id.length>0){
      console.log(props.id);
    }
    function openPopup(){
      localPopup.value=true;
    }
    function changeColor(){
      color.value="yellow";
    }
    function changeColorBack(){
      color.value="grey";
    }
    function cardHover1(){
      elevation1.value=5;
      hover1.value=true;
    }
    function hoverLeave1(){
      elevation1.value=1;
      hover1.value=false;
    }
    function cardHover2(){
      elevation2.value=5;
      hover2.value=true;
    }
    function hoverLeave2(){
      elevation2.value=1;
      hover2.value=false;
    }
    return {color,changeColor,changeColorBack,openPopup,name,hover1,hover2,elevation1,cardHover1,hoverLeave1,elevation2,cardHover2,hoverLeave2,localPopup}
  }
}
</script>

<!--<style>-->
<!--.hover-card{-->
<!--  box-shadow: blue;-->

<!--}-->
<!--</style>-->
