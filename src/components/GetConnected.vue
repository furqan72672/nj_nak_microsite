<template>
  <div class="d-flex flex-column justify-center align-center mt-16">
    <p style="font-size: 20px;">Get Connected</p>
    <div class="d-flex justify-center align-baseline mt-10">
      <v-card class="mr-10" elevation="0">
        <p class="mt-2">Contact:</p>
        <p>Email:</p>
        <p>Address:</p>
      </v-card>
      <v-card class="ml-10" elevation="0">
        <p>{{ company.phone }}</p>
        <p>{{ company.email }}</p>
        <p>{{address}}</p>
      </v-card>
    </div>
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
