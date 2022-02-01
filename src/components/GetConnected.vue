<template>
  <div class="d-flex flex-column justify-center align-center">
    <v-card width="100%" class="d-flex flex-column pa-10 footer" elevation="0">
      <p class="font-weight-bold align-self-center" style="font-size: 25px;">Want to contact {{ company.name }} ? </p>
      <div class="d-flex mt-10 align-self-center" style="width: 60%">
        <v-spacer></v-spacer>
        <div class="d-flex flex-column justify-center align-center">
          <strong>Phone</strong>
          <p>{{ company.phone }}</p>
        </div>
        <v-spacer></v-spacer>
        <v-divider vertical thickness="3" length="40"></v-divider>
        <v-spacer></v-spacer>

        <div class="d-flex flex-column justify-center align-center">
          <strong>Email</strong>
          <p>{{ company.email }}</p>
        </div>
        <v-spacer></v-spacer>
        <v-divider vertical thickness="3" length="40"></v-divider>
        <v-spacer></v-spacer>

        <div class="d-flex flex-column justify-center align-center">
          <strong>Address</strong>
          <p>{{ address }}</p>
        </div>
        <v-spacer></v-spacer>
      </div>
    </v-card>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name:'GetConnected',
  props:{
    company:{
      type:Object,
      required:true
    }
  },
  setup(props){
    const phone=ref("+923229482969");
    const site=ref("www.google.com");
    const href=ref("https://"+site.value);
    const address=ref(null)
    if (props.company.address.country!=null){
      if (props.company.address.state!=null) {
        if (props.company.address.city != null) {
          return address.value=props.company.address.city+props.company.address.state+props.company.address.country
        }
        return address.value=props.company.address.state+props.company.address.country
      }
      address.value=props.company.address.country
    }
    return{address,site,phone,href}
  }
}
</script>

<style>
.footer{
  /*box-shadow: -3px -3px 2px 2px grey;*/
}
</style>
