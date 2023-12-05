<script setup>
let msg = "Hello world!"
let dynamicId = 2;
const disableBtn = true;
const objectAttrs = {
  id: "text-1",
  class: "text-default"
}

const textHide = false
const google = "https://www.google.com"
const cleckMe = () =>{
  console.log("Click Me");
}

</script>

<template>
  <!-- Variable Text -->
  <div>
    {{ msg }}
  </div>

  <!-- Dynamic ID -->
  <div :id="dynamicId">
    Dynamic ID - {{ dynamicId }}
  </div>

  <!-- Dynamic Boolean -->
  <div>
    <button :disabled="disableBtn">Button {{ disableBtn }}</button>
  </div>

  <!-- Attr Binding -->
  <div v-bind="objectAttrs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto.</div>

  <!-- Conditional Rendering -->
  <p v-if="textHide">Text Hide/Show [add/remove from DOM]</p>

  <!-- Hide/Show Rendering -->
  <p v-show="textHide">Text Hide/Show [display hide/show from DOM accordin to CSS dispaly properties]</p>

  <!-- Link Binding -->
  <a :href="google">Goolge</a>

  <!-- Button Event -->
  <div>
    <button v-on:click="cleckMe">Click The Button</button> 
    <br> or <br>
    <button @click="cleckMe">Click The Button</button> 
  </div>
</template>


<style scoped></style>
