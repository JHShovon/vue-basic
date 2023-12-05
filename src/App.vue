<script setup>
import { reactive, ref } from 'vue';
import useNuber from './components/number'

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
  email: "",
  password: ""
})

console.log(form);

// Using v-for

const productList = [
  {
    id: 1,
    name: "Smartphone",
    price: 499.99,
    description: "High-performance smartphone with advanced features.",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Laptop",
    price: 999.99,
    description: "Thin and lightweight laptop for productivity and entertainment.",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Fitness Tracker",
    price: 79.99,
    description: "Track your daily activities and monitor your health with this fitness tracker.",
    category: "Health and Fitness"
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 129.99,
    description: "Immerse yourself in music with these high-quality wireless headphones.",
    category: "Electronics"
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 49.99,
    description: "Brew your favorite coffee at home with this easy-to-use coffee maker.",
    category: "Kitchen Appliances"
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 299.99,
    description: "Experience immersive gaming with the latest gaming console.",
    category: "Electronics"
  },
  {
    id: 7,
    name: "Smart Watch",
    price: 149.99,
    description: "Stay connected and track your fitness with this stylish smartwatch.",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 79.99,
    description: "Enjoy your favorite music on the go with this portable Bluetooth speaker.",
    category: "Electronics"
  },
  {
    id: 9,
    name: "Digital Camera",
    price: 399.99,
    description: "Capture stunning moments with this high-resolution digital camera.",
    category: "Electronics"
  },
  {
    id: 10,
    name: "Robot Vacuum Cleaner",
    price: 199.99,
    description: "Effortlessly keep your home clean with this smart robot vacuum cleaner.",
    category: "Home Appliances"
  }
];

const number = ref(0);

const {increment, decrement} = useNuber(number)

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
    <input type="password" name="password" id="password" placeholder="Enter your password" v-model="form.password"
      required>
  </form>
  <p>User email is {{ form.email }} and user passsword is {{ form.password }}</p>

  <!-- Using v-for looping show the all products -->
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Description</th>
      <th>Category</th>
    </tr>
    <tr v-for="product in productList" :key="product.id">
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.description }}</td>
      <td>{{ product.category }}</td>
    </tr>
  </table>

  <!-- Invoking Method - simple data -->
  <button @click="number++">Increment</button>
  <span>{{ number }}</span>
  <button @click="number--">Decrement</button>

  <p>or</p>

  <!-- Invoking Method - Group data -->
  <button @click="increment">Increment</button>
  <span>{{ number }}</span>
  <button @click="decrement">Decrement</button>
</template>


<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: rgb(68, 47, 255);
}</style>
