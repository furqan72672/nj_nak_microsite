<template>
  <div class="d-flex flex-column justify-center align-center mt-16">
    <p style="font-size: 20px;">Get Connected</p>
    <div class="d-flex justify-center mt-10">
      <div class="mr-15">
        <p class="mt-2">Contact:</p>
        <p>Website:</p>
        <p>Address:</p>
      </div>
        <v-card width="26%" elevation="0">
        <p>{{ phone }}</p>
        <a :href="href" style="text-decoration: none; color: black">{{ site }}</a>
        <p >{{address}}</p>
        </v-card>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name:'GetConnected',
  setup(){
    const phone=ref("+923229482969");
    const site=ref("www.google.com");
    const href=ref("https://"+site.value)
    const address=ref("SparkoSol, Shah Rukn-e-alam, Multan, Punjab, Pakistan");
    return{address,site,phone,href}
  }
}
</script>
