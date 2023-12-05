<script setup>
import { reactive, ref } from 'vue';

let msg = "Hello world!"
let dynamicId = 2;
const disableBtn = true;
const objectAttrs = {
  id: "text-1",
  class: "text-default"
}

const textHide = false
const google = "https://www.google.com"
const cleckMe = () => {
  console.log("Click Me");
}

// Reactive Value - using Ref [ For Single Data]
const countNumber = ref(0);
setInterval(() => {
  countNumber.value++
}, 1000)

// Reactive Value - using Reactive [ For Group Data]
const userInfo = reactive({
  id: "123",
  name: "Jaber",
})

console.log(userInfo);

setInterval(() => {
  userInfo.id = "222",
  userInfo.name = "Shovon"
}, 3000)


// Using v-modal
const form = reactive({
  email : "",
  password: ""
})

console.log(form);

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

  <!-- Reactive Value - useing Ref -->
  <h2>Count Number : {{ countNumber }}</h2>

  <!-- Reactive Value - useing Reactive -->
  <p>Changing the value after 3seconds</p>
  <p>User ID is: {{ userInfo.id }} and User Name is : {{ userInfo.name }}</p>

  <!-- Useing V Model -->
  <h2>User Info Form</h2>
  <form action="#" method="post">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Enter your email" v-model="form.email" required>
    <br>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Enter your password" v-model="form.password" required>
  </form>
  <p>User email is {{ form.email }} and user passsword is {{ form.password }}</p>
</template>


<style scoped></style>
