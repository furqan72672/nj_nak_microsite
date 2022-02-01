<template>
  <div style="margin-right: 20%; margin-left: 20%;" class="d-flex flex-column mt-10">
    <h1>{{ company.name }}</h1>
    <span style="font-size: 15px; color: grey" >{{ company.address.city?company.address.city+',':''}}{{company.address.country}}</span>
    <div class="d-flex  align-center">
      <h3 class="mr-3">{{ average_rating }}</h3>
      <div class="mr-4">
        <v-rating
            v-model="average_rating"
            color="yellow"
            density="compact"
            half-increments
            readonly
        ></v-rating>
      </div>
      <v-divider vertical thickness="1.5" class="mr-4"></v-divider>
      <div class="d-flex mr-4 align-baseline" v-if="google!=null">
        <v-icon size="x-small" color="red">mdi-google</v-icon>
        <p>{{ google }}</p>
      </div>
      <div class="d-flex mr-4 align-baseline" v-if="facebook!=null">
        <v-icon size="x-small" color="blue">mdi-facebook</v-icon>
        <p>{{ facebook }}</p>
      </div>
      <div class="d-flex mr-4 align-baseline" v-if="rooster!=null">
        <v-icon size="x-small" color="brown">mdi-instagram</v-icon>
        <p>{{rooster}}</p>
      </div>
      <div class="d-flex mr-4 align-baseline" v-if="bbb!=null">
        <v-icon size="x-small" color="brown">mdi-instagram</v-icon>
        <p>{{bbb}}</p>
      </div>
      <v-spacer></v-spacer>
      <ButtonWithPopup persistent/>
    </div>
  </div>

</template>

<script>
import { ref} from "vue";
// import Popup from "@/components/Popup";
import ButtonWithPopup from "@/components/ButtonWithPopup";

export default {
  name:'Header',
  components:{ButtonWithPopup},
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
  async setup(props){
    const rooster=ref(props.rating.rooster?parseFloat(props.rating.rooster.toFixed(1)):null)
    const bbb=ref(props.rating.bbb?parseFloat(props.rating.bbb.toFixed(1)):null)
    const google=ref(props.rating.google?parseFloat(props.rating.google.toFixed(1)):null)
    const facebook=ref(props.rating.facebook?parseFloat(props.rating.facebook.toFixed(1)):null)
    const average_rating=ref(props.rating.average_rating?parseFloat(props.rating.average_rating.toFixed(1)):null)

    return{rooster,bbb,google,facebook,average_rating}
  },
}
</script>


<style>
.align-with-label{
  width: 100% !important;
}

</style>
