<template>
  <v-overlay :persistent=persistent class="d-flex justify-center" :contained=true>
    <v-card rounded max-height="90vh" width="35vw" class="pop">
      <div class="d-flex mt-2">
        <v-spacer></v-spacer>
        <v-btn icon size="xx-small" flat @click="$emit('closeDialog')" class="mr-2"><v-icon size="x-small">mdi-close</v-icon></v-btn>
      </div>
      <slot></slot>
    </v-card>
  </v-overlay>
</template>

<script>

export default {
  name:'Popup',
  props:{
    close:{
      type:Boolean,
      default:true
    },
    persistent:{
      type:Boolean,
      default: false
    }
  },
  setup(props){
    return{}
  }
}
</script>

<style>
.pop{
  overflow-y: scroll;
  margin: 5vh 0;
  border-radius: 10px;
}
.pop::-webkit-scrollbar {
  width: 5px;
  height: auto;
  background: transparent;

}
.pop::-webkit-scrollbar-thumb {
  background: gray;
}

</style>
