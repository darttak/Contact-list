<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="name" v-model="name">
    <input type="text" placeholder="phoneNumber" v-model="phonenumber">
    <button type="submit">Create Contact</button>
    <hr>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      name: "",
      phonenumber: "",
      address: ""
    };
  },
  methods: {
    ...mapMutations(["addContact"]),
    submit() {
      this.addContact({
        name: this.name,
        phonenumber: this.phonenumber,
        id: Date.now()
      });
      this.name = this.phonenumber = "";
    }
  }
};
</script>


<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

