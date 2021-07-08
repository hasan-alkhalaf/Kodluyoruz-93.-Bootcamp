<template>
  <div class="form">
    <h2>FORM PAGE</h2>
    <h3>{{ fullName }}</h3>
    <form v-on:submit.prevent="sendContact()">
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <button type="Submit">Gonder</button>
    
    </form>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from "vue";
export default {
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const fullName = computed(() => {
      return `${firstName.value}  ${lastName.value.uppercase()}`;
    });
    const sendContact = () => {
      alert('thank');
      firstName.value = "";
      lastName.value = "";
    };
    onMounted(() => console.log("Mount: ⛰ Form Component"));
    onUnmounted(() => console.log("unMount: 👋🏻 Form Component "));

    return { firstName, lastName, fullName, sendContact };
  },
};
</script>

<style lang="scss">
</style>
