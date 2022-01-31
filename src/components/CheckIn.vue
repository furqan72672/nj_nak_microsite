<template>
<!--  <div class="d-flex flex-column justify-center align-center mt-10">-->
<!--  </div>-->
  <Popup v-model="localPopup" @closeDialog="localPopup=false">
    <div class="mx-4 mb-8 d-flex flex-column align-center">
      <h2>Check in with us!</h2>
      <v-text-field density="compact" label="First Name" style="width: 90%;!important;" class="mt-4"></v-text-field>
      <v-text-field density="compact" label="Last Name" style="width: 90%;!important;"></v-text-field>
      <v-text-field density="compact" label="Phone" style="width: 90%;!important;"></v-text-field>
      <v-text-field density="compact" label="Email" style="width: 90%;!important;"></v-text-field>
      <p class="text-grey mb-2 mx-4" style="text-align: center">By clicking this button, you are agreeing to our privacy terms. We'll reach you soon via Email or SMS.</p>
      <v-btn height="8vh" width="10vw" rounded="pill" color="light-blue" flat text-color="white" @click.prevent="">Check In</v-btn>
    </div>
  </Popup>
</template>

<script>
import {ref} from "vue";
import Popup from "./Popup";

export default {
  name:'CheckIn',
  components: {Popup},
  props:{
    popup:{
      type:Boolean,
    }
  },
  setup(props){
    const localPopup=ref(props.popup)

    function openPopup(){
      localPopup.value=true;
    }
    return {openPopup,localPopup}
  }
}
</script>
