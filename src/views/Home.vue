<template>
  <div class="home">
    <contactList/>
  </div>
</template>

<script>
import contactList from '../components/contactList.vue'

export default {
  name: 'Home',
  components: {
    contactList
  }
}
</script>
